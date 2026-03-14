# Wit.me Codebase Walkthrough

A detailed guide to understanding how the Wit.me study group platform is organized and how its components interact.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Core Concepts](#core-concepts)
3. [Data Flow Examples](#data-flow-examples)
4. [Key Components](#key-components)
5. [Common Patterns](#common-patterns)
6. [Debugging Guide](#debugging-guide)

---

## Project Structure

```
src/
├── App.jsx                          # Entry point, routing setup
├── context/
│   └── AuthContext.jsx              # Global auth state
├── pages/                           # Route containers (lazy-loaded)
│   ├── Home.jsx                     # Study discovery
│   ├── Login.jsx                    # Auth
│   ├── Register.jsx                 # Auth
│   ├── CreateStudy.jsx              # Study creation form
│   ├── StudyDetail.jsx              # Study details + apply
│   └── Dashboard.jsx                # Organizer & user dashboards
├── components/
│   ├── ui/                          # Reusable UI elements (memoized)
│   │   ├── Button.jsx
│   │   ├── StatusBadge.jsx
│   │   ├── CategoryTag.jsx
│   │   ├── ErrorMessage.jsx
│   │   └── ...
│   ├── ProtectedRoute.jsx           # Auth guard wrapper
│   ├── Navbar.jsx                   # Navigation bar
│   └── ...
├── hooks/                           # Custom React hooks
│   ├── useStudyGroups.js
│   │   ├── useAllStudyGroups()      # All studies + real-time
│   │   ├── useStudyGroup(id)        # Single study
│   │   ├── useOrganizerStudyGroups()
│   │   └── useCanCreateStudy()
│   └── useApplications.js
│       ├── useUserApplications()
│       └── useStudyGroupApplications()
├── services/                        # Business logic
│   ├── repositories/                # Data access layer
│   │   ├── StudyGroupRepository.js
│   │   └── ApplicationRepository.js
│   ├── StudyGroupService.js         # Study business logic
│   ├── ApplicationService.js        # Application business logic
│   └── TextEnhancerService.js       # AI enhancement logic
├── utils/                           # Helpers
│   ├── errorHandler.js              # Error conversion
│   ├── csvExporter.js               # CSV export
│   └── ...
├── constants/                       # Enums & constants
│   └── constants.js
├── lib/                             # External service setup
│   ├── firebase.js                  # Firebase initialization
│   └── gemini.js                    # Gemini API setup
└── index.css                        # Global styles
```

---

## Core Concepts

### 1. The Data Flow Architecture

Data flows through predictable layers:

```
User Action in Component
    ↓
calls Service method (business logic)
    ↓
calls Repository method (database query)
    ↓
Firebase Firestore
    ↓
returns data
    ↓
Component updates via hook
```

### 2. Three Types of Data Fetching

#### Immediate Fetch (One-time)
```javascript
// In StudyGroupService
static async createStudyGroup(data, userId, userName) {
  await StudyGroupRepository.createStudyGroup(data);
}

// In Component
await StudyGroupService.createStudyGroup(...);
```

#### Subscription (Real-time)
```javascript
// In useStudyGroups hook
useEffect(() => {
  const unsubscribe = StudyGroupRepository.subscribeToAllStudyGroups(
    (studies) => setStudies(studies)
  );
  return unsubscribe; // cleanup on unmount
}, []);
```

#### Computed/Derived
```javascript
// In StudyGroupService
static async getOrganizerStudiesWithCount(organizerId) {
  const studies = await StudyGroupRepository.getStudyGroupsByOrganizer(organizerId);
  const remaining = MAX_STUDIES_PER_ORGANIZER - studies.length;
  return { studies, remainingSlots: remaining };
}
```

### 3. Error Handling Pattern

Errors flow from low-level to high-level:

```javascript
// In Repository (throws AppError)
if (!docSnap.exists()) {
  throw new AppError('NOT_FOUND', 'Study not found');
}

// In Service (can catch and enhance)
try {
  const result = await repository.method();
} catch (err) {
  if (err.code === 'NOT_FOUND') {
    // Handle gracefully or re-throw
  }
}

// In Component (convert to user message)
try {
  await service.method();
} catch (err) {
  const { message } = handleServiceError(err);
  setError(message); // Display to user
}
```

---

## Data Flow Examples

### Example 1: User Discovers and Applies to Study

**File Trail**: `Home.jsx` → `StudyDetail.jsx` → `useStudyGroup()` → `ApplicationService` → `ApplicationRepository`

**Step-by-step**:

1. **Home.jsx** renders study list
   ```javascript
   const { studies, loading } = useAllStudyGroups();
   // Hook subscribes to all studies in real-time
   ```

2. **User clicks study card** → navigates to `/study/:id`

3. **StudyDetail.jsx** loads
   ```javascript
   const { study } = useStudyGroup(id);
   // Hook fetches single study, subscribes to updates
   ```

4. **User fills form and clicks "Apply"**
   ```javascript
   await ApplicationService.applyToStudyGroup(study, userId, userName, email);
   ```

5. **ApplicationService validates**
   ```javascript
   // Check: user not already applied, not self-apply, status is open
   // If valid, call repository
   ```

6. **ApplicationRepository creates document**
   ```javascript
   await addDoc(collection(db, 'applications'), {
     studyGroupId: study.id,
     userId: userId,
     status: 'pending',
     appliedAt: now
   });
   ```

7. **Firebase syncs data**
   - Triggers real-time listeners
   - Dashboard hook updates with new application
   - Organizer sees new applicant instantly

8. **User sees confirmation**
   ```javascript
   setHasApplied(true);
   // Show: "신청 완료되었습니다. 모임장의 승인을 기다리고 있습니다."
   ```

---

### Example 2: Organizer Approves Application

**File Trail**: `Dashboard.jsx` → `ApplicationService.approveApplication()` → `ApplicationRepository`

**Step-by-step**:

1. **Dashboard.jsx** shows applicant list
   ```javascript
   const { applications: applicants } = useStudyGroupApplications(selectedStudy?.id);
   // Subscribes to study's applications
   ```

2. **Organizer clicks "Approve" button**
   ```javascript
   handleApproveApplication(appId) {
     await ApplicationService.approveApplication(appId, currentUser.uid);
   }
   ```

3. **ApplicationService validates**
   ```javascript
   // Verify: organizer owns the study, app exists, status is 'pending'
   ```

4. **ApplicationRepository updates**
   ```javascript
   await updateDoc(docRef, { status: 'approved', updatedAt: now });
   ```

5. **Real-time listeners trigger**
   - Dashboard refreshes with new status
   - User's Dashboard (if viewing) updates in real-time
   - Framer-motion animates status change

6. **CSV Export Ready**
   ```javascript
   // Organizer can now download approved participant list
   exportParticipantsToCSV(participants, studyTitle);
   ```

---

### Example 3: Creating a Study with AI Enhancement

**File Trail**: `CreateStudy.jsx` → `TextEnhancerService` → `StudyGroupService` → Repositories

**Step-by-step**:

1. **User fills form** (title, category, max participants, description)

2. **User clicks "Improve with AI"**
   ```javascript
   const enhanced = await TextEnhancerService.enhanceStudyDescription(
     formData.title,
     formData.description
   );
   setFormData(prev => ({ ...prev, description: enhanced }));
   ```

3. **TextEnhancerService calls Gemini API**
   ```javascript
   const response = await generateContent(prompt);
   return extractText(response);
   ```

4. **User reviews enhanced description** (optional edit)

5. **User clicks "Create Study"**
   ```javascript
   await StudyGroupService.createStudyGroup(formData, currentUser.uid, userData.displayName);
   ```

6. **StudyGroupService validates**
   ```javascript
   // Check: organizer hasn't exceeded 5-study limit
   const canCreate = await repository.getOrganizerStudyCount(organizerId) < MAX;
   if (!canCreate) throw new AppError('STUDY_LIMIT_EXCEEDED', '...');
   ```

7. **StudyGroupRepository creates**
   ```javascript
   await addDoc(collection(db, 'studyGroups'), {
     title, category, description, maxParticipants,
     organizerId, organizerName, createdAt, status: 'OPEN'
   });
   ```

8. **Real-time propagation**
   - All `useAllStudyGroups` subscribers see new study
   - Organizer's `useOrganizerStudyGroups` updates
   - Home page displays immediately

9. **User navigates to home**
   ```javascript
   navigate('/');
   // Home already has new study from real-time subscription
   ```

---

## Key Components

### Pages (Lazy-Loaded)

#### Home.jsx
- **Purpose**: Discover and browse studies
- **Data**: `useAllStudyGroups()` - all studies with pagination
- **Actions**: Click study to view details
- **Key Pattern**: List rendering with animation variants

#### StudyDetail.jsx
- **Purpose**: View study details and apply
- **Data**: `useStudyGroup(id)` - single study, `useAuth()` - current user
- **Actions**: Apply to study, go back
- **Key Pattern**: Real-time updates on apply status

#### Dashboard.jsx
- **Purpose**: Manage studies and applications
- **Left Column**: Organizer view (manage applicants)
- **Right Column**: User view (track applications)
- **Data**: Multiple hooks (organizer studies, all applications, study applicants)
- **Key Pattern**: Nested subscriptions with expand/collapse animation

#### CreateStudy.jsx
- **Purpose**: Create new study
- **Data**: Form state, `useCanCreateStudy()` - limit check
- **Actions**: Enhance with AI, create study
- **Key Pattern**: Optional AI enhancement before form submission

#### Login.jsx & Register.jsx
- **Purpose**: Authentication
- **Data**: `useAuth()` - signup/login functions
- **Actions**: Submit credentials
- **Key Pattern**: Auth state management with loading

---

### Custom Hooks

#### useStudyGroups.js

```javascript
// Get all studies with real-time updates
const { studies, loading } = useAllStudyGroups(pageSize = 20);

// Get single study by ID
const { study, loading } = useStudyGroup(id);

// Get organizer's studies
const { studies, loading } = useOrganizerStudyGroups(organizerId);

// Check if can create more studies
const { canCreate, remainingSlots, loading } = useCanCreateStudy(organizerId);
```

**How it works**:
1. Hook calls Repository's subscribe method
2. Sets up listener that calls hook's setState
3. Returns state + loading flag
4. On unmount, unsubscribes from listener

#### useApplications.js

```javascript
// Get user's applications
const { applications, loading } = useUserApplications(userId);

// Get applications for a study
const { applications, loading } = useStudyGroupApplications(studyId);
```

---

### Services

#### StudyGroupService.js

```javascript
// Create new study
await createStudyGroup(data, userId, userName);

// Get studies with slot count
await getOrganizerStudiesWithCount(organizerId);
// Returns: { studies: [...], remainingSlots: 2 }

// Get participant list for CSV export
await getParticipantListForExport(studyId);
// Returns array of approved participants ready for CSV
```

#### ApplicationService.js

```javascript
// Apply to study
await applyToStudyGroup(study, userId, userName, userEmail);
// Validates: not already applied, study is open, user exists

// Approve application
await approveApplication(appId, organizerId);
// Validates: organizer owns study, status is pending

// Reject application
await rejectApplication(appId, organizerId);

// Check if user applied
await hasApplied(userId, studyId);
```

#### TextEnhancerService.js

```javascript
// Enhance study description with AI
await enhanceStudyDescription(title, description);
// Returns: improved description or throws error if API fails
```

---

### Repositories

#### StudyGroupRepository.js

```javascript
// Single fetch
await getAllStudyGroups(pageSize = 20);
await getStudyGroupById(id);
await getStudyGroupsByOrganizer(organizerId);

// Real-time subscription
subscribeToAllStudyGroups(callback, pageSize = 20);
subscribeToOrganizerStudyGroups(organizerId, callback);

// Write operations
await createStudyGroup(studyData);
await updateStudyGroup(id, updates);

// Count operation
await getOrganizerStudyCount(organizerId);
```

#### ApplicationRepository.js

```javascript
// Reads
await getApplicationById(appId);
await getUserApplications(userId);
await getStudyGroupApplications(studyId);
await hasUserApplied(userId, studyId);

// Real-time subscriptions
subscribeToUserApplications(userId, callback);
subscribeToStudyGroupApplications(studyId, callback);

// Writes
await createApplication(appData);
await updateApplication(appId, updates);
await deleteApplication(appId);
```

---

## Common Patterns

### Pattern 1: Fetching Data in a Page

```javascript
// pages/MyPage.jsx
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useMyData } from '../hooks/useMyData';

export default function MyPage() {
  const { currentUser } = useAuth();
  const { data, loading, error } = useMyData(currentUser?.uid);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;

  return <div>{/* render data */}</div>;
}
```

### Pattern 2: Handling a User Action

```javascript
const handleAction = async () => {
  setLoading(true);
  setError('');
  try {
    const result = await MyService.doSomething();
    // Update state or navigate
    setSuccess(true);
  } catch (err) {
    const { message } = handleServiceError(err);
    setError(message);
  } finally {
    setLoading(false);
  }
};
```

### Pattern 3: Real-time List with Animations

```javascript
const { items } = useMyItems(filter);

return (
  <div>
    {items.map((item, index) => (
      <motion.div
        key={item.id}
        {...fadeInUp}  // Module-level constant
        transition={{ delay: index * 0.05 }}
      >
        <ItemCard item={item} />
      </motion.div>
    ))}
  </div>
);
```

### Pattern 4: Conditional Rendering Based on Auth

```javascript
const { currentUser } = useAuth();
const isOrganizer = currentUser?.uid === study.organizerId;

if (isOrganizer) {
  return <OrganizerActions />;
}
return <ParticipantActions />;
```

---

## Debugging Guide

### Issue: Component not updating when data changes

**Diagnosis**:
1. Check if using hook correctly: `const { data } = useMyData(id)`
2. Verify hook has dependency array: `useEffect(() => {...}, [id])`
3. Check Firebase rules allow read access
4. Verify listener isn't being unsubscribed prematurely

**Solution**:
```javascript
// ✅ Good: Dependency triggers re-subscribe
const { data } = useMyData(currentUser?.uid);

// ❌ Bad: New subscription every render
const { data } = useMyData(Math.random());
```

### Issue: Errors not displaying to user

**Diagnosis**:
1. Check if error thrown in service layer
2. Verify component has try/catch block
3. Confirm `handleServiceError()` is called
4. Check if error message is being set

**Solution**:
```javascript
try {
  await MyService.action();
} catch (err) {
  const { message } = handleServiceError(err);
  setError(message);  // Actually set state
}

// Render:
{error && <ErrorMessage message={error} />}
```

### Issue: Slow performance with lists

**Diagnosis**:
1. Check if components are memoized
2. Verify list items are memoized
3. Check if animations are creating objects in render
4. Look for unnecessary re-renders in React DevTools

**Solution**:
```javascript
// ✅ Extract animation to module
const fadeInUp = { initial: {...}, animate: {...} };

// ❌ Don't create inline
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// Memoize list items
export const ListItem = React.memo(function ListItem({ item }) {...});
```

### Issue: Memory leaks (increasing memory over time)

**Diagnosis**:
1. Export CSV multiple times, check memory in DevTools
2. Perform actions repeatedly, look for leak pattern
3. Check Console for warnings

**Solution**:
```javascript
// ✅ Good: Revoke after use
const url = URL.createObjectURL(blob);
// ... use url ...
URL.revokeObjectURL(url);

// Always return unsubscribe from hooks
useEffect(() => {
  const unsubscribe = subscribe(callback);
  return unsubscribe;  // cleanup
}, []);
```

### Issue: Context consumers re-rendering too much

**Diagnosis**:
1. Wrap context provider in React DevTools Profiler
2. Check why value is changing
3. Verify no inline object creation in value

**Solution**:
```javascript
// ✅ Good: Memoized value
const value = useMemo(() => ({
  currentUser,
  userData,
  login,
  logout
}), [currentUser, userData, login, logout]);

// ✅ Good: Memoized functions
const login = useCallback((email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}, []);
```

### Useful DevTools Commands

```javascript
// Check subscription listeners
firebase.firestore.enableLogging(true);

// Monitor authentication state
import { onAuthStateChanged } from 'firebase/auth';
onAuthStateChanged(auth, user => console.log('Auth:', user));

// Check Firestore queries
console.log(db); // See all collections
```

---

## File Naming Conventions

- **Pages**: PascalCase with .jsx → `HomePage.jsx`, `CreateStudy.jsx`
- **Components**: PascalCase with .jsx → `Button.jsx`, `Navbar.jsx`
- **Hooks**: camelCase with .js → `useStudyGroups.js`, `useAuth.js`
- **Services**: PascalCase + Service.js → `StudyGroupService.js`, `ApplicationService.js`
- **Repositories**: PascalCase + Repository.js → `StudyGroupRepository.js`
- **Utilities**: camelCase with .js → `errorHandler.js`, `csvExporter.js`
- **Constants**: camelCase or UPPER_CASE → `constants.js`, `errors.js`

---

## Performance Tips

1. **Use pagination**: Don't fetch more than needed
2. **Memoize components**: `React.memo` for pure UI components
3. **Extract animations**: Module-level constants for framer-motion
4. **Use code splitting**: Pages automatically lazy-loaded
5. **Revoke blob URLs**: Always call `URL.revokeObjectURL()`
6. **Watch component renders**: Use React DevTools Profiler
7. **Audit bundle**: Run `npm run build` to see chunk sizes

---

## Next Steps for Contributors

1. Read [ADR.md](./ADR.md) for architectural decisions
2. Review [Getting_started.md](./Getting_started.md) for setup
3. Explore main ARCHITECTURE.md in project root
4. Start with modifying a simple component
5. Add tests as you create new features
