# Wit.me Study Platform - Architecture Documentation

## Overview

The application follows a **layered architecture** with clear separation of concerns:

```
UI Layer (Pages/Components)
    ↓
Custom Hooks Layer (useStudyGroups, useApplications)
    ↓
Service Layer (BusinessLogic)
    ↓
Repository Layer (DataAccess)
    ↓
Firebase (External Service)
```

## Directory Structure

```
src/
├── components/              # React components
│   ├── ui/                 # Reusable UI components (Button, Card, Badge, etc)
│   ├── Layout/             # Layout components (Navbar, ProtectedRoute)
│   └── features/           # Feature-specific components (if added)
├── pages/                  # Page containers (route endpoints)
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── CreateStudy.jsx
│   ├── StudyDetail.jsx
│   └── Dashboard.jsx
├── services/               # Business logic layer
│   ├── repositories/       # Data access layer
│   │   ├── StudyGroupRepository.js
│   │   └── ApplicationRepository.js
│   ├── StudyGroupService.js
│   ├── ApplicationService.js
│   ├── TextEnhancerService.js
│   └── index.js
├── hooks/                  # Custom React hooks
│   ├── useStudyGroups.js
│   ├── useApplications.js
│   └── index.js
├── context/                # React Context (auth only)
│   └── AuthContext.jsx
├── lib/                    # Utilities & configs
│   ├── firebase.js
│   └── gemini.js
├── utils/                  # Helper functions
│   ├── errorHandler.js     # Error handling utilities
│   ├── csvExporter.js      # CSV export utility
│   └── ...
├── constants/              # Constants and enums
│   └── errors.js          # Error codes, status types, categories
└── App.jsx                 # Main app component
```

## Layer Descriptions

### 1. **Repository Layer** (`services/repositories/`)

Handles all direct Firebase operations. Acts as a data access layer.

**Files:**
- `StudyGroupRepository.js` - CRUD operations for study groups
- `ApplicationRepository.js` - CRUD operations for applications

**Key Methods:**
- `getById()`, `create()`, `update()`
- `subscribeToXxx()` - Real-time subscription methods
- All operations isolated from business logic

**Benefits:**
- ✅ Single source of truth for database queries
- ✅ Easy to mock for testing
- ✅ Changes to Firestore structure only affect one place
- ✅ Can add caching/optimization at this level

### 2. **Service Layer** (`services/`)

Contains business logic and orchestrates repositories.

**Files:**
- `StudyGroupService.js` - Business logic for study groups
  - `createStudyGroup()` - Validates organizer limit, creates study
  - `getOrganizerStudiesWithCount()` - Gets studies + remaining slots
  - `getParticipantListForExport()` - Prepares data for CSV export

- `ApplicationService.js` - Business logic for applications
  - `applyToStudyGroup()` - Validates, prevents duplicates/self-apply
  - `approveApplication()`, `rejectApplication()`
  - `hasApplied()` - Checks application status

- `TextEnhancerService.js` - AI integration
  - `enhanceStudyDescription()` - Calls Gemini API with isolated logic
  - `buildEnhancementPrompt()` - Encapsulates prompt generation

**Benefits:**
- ✅ Business rules in one place
- ✅ Reusable across multiple components
- ✅ Easy to test without UI
- ✅ Changes to business logic don't affect components

### 3. **Hooks Layer** (`hooks/`)

Custom React hooks that bridge services and components.

**Files:**
- `useStudyGroups.js`
  - `useAllStudyGroups()` - Subscribe to all studies
  - `useOrganizerStudyGroups()` - Subscribe to organizer's studies
  - `useStudyGroup()` - Get single study by ID
  - `useCanCreateStudy()` - Check if organizer can create more

- `useApplications.js`
  - `useUserApplications()` - Subscribe to user's applications
  - `useStudyGroupApplications()` - Subscribe to study's applications

**Benefits:**
- ✅ Automatic subscription cleanup on unmount
- ✅ Reusable across components
- ✅ Follows React Hooks conventions
- ✅ Centralized state management for specific domains

### 4. **UI Component Layer** (`components/ui/`)

Reusable, presentation-only components.

**Components:**
- `Button` - Variant support (primary, outline, etc)
- `Card`, `CardHeader`, `CardBody`, `CardFooter` - Card layouts
- `StatusBadge` - Display application status (pending, approved, rejected)
- `CategoryTag` - Display study category
- `ErrorMessage` - Error display with icon
- `LoadingSpinner` - Loading state display

**Benefits:**
- ✅ Consistent design across app
- ✅ Easy to theme/update styles
- ✅ Reduced code duplication
- ✅ Easier to swap designs

### 5. **Constants** (`constants/errors.js`)

Centralized constants and enums.

```javascript
ERROR_CODES = {
  STUDY_LIMIT_EXCEEDED,
  UNAUTHORIZED,
  NOT_FOUND,
  // ...
}

STATUS_TYPES = {
  PENDING, APPROVED, REJECTED, OPEN, CLOSED
}

STUDY_CATEGORIES = [...]
```

**Benefits:**
- ✅ Single source of truth for values
- ✅ Easy to find and update constants
- ✅ Type safety with string enums

### 6. **Utilities** (`utils/`)

Helper functions for common operations.

**Files:**
- `errorHandler.js` - Centralized error handling
  - `handleServiceError()` - Converts service errors to user-friendly messages
  - `AppError` - Custom error class

- `csvExporter.js` - CSV export functionality
  - `exportParticipantsToCSV()` - Exports participant list

## Data Flow Example

### Creating a Study Group

```
User fills form in CreateStudy.jsx
    ↓
handleSubmit() calls StudyGroupService.createStudyGroup()
    ↓
Service validates organizer limit
    ↓
Service calls StudyGroupRepository.createStudyGroup()
    ↓
Repository calls Firebase addDoc()
    ↓
Firebase returns new document
    ↓
Service returns created study
    ↓
Component navigates to home
    ↓
useAllStudyGroups hook fetches updated list (via repository subscription)
    ↓
Home page displays new study in real-time
```

## Error Handling

### Flow
```
Component tries to perform action
    ↓
Service throws AppError with code + message
    ↓
Component catches and calls handleServiceError()
    ↓
handleServiceError() converts error to user-friendly message
    ↓
Component displays error message
```

### Example
```javascript
try {
  await StudyGroupService.createStudyGroup(formData, userId, userName);
} catch (err) {
  const { message } = handleServiceError(err);
  setError(message); // Display to user
}
```

## Adding New Features

### Example: Add Study Status Filtering

1. **Repository** - Add method to get studies by status
```javascript
// StudyGroupRepository.js
static async getStudiesByStatus(status) {
  const q = query(
    collection(db, 'studyGroups'),
    where('status', '==', status)
  );
  // ...
}
```

2. **Service** - Add business logic
```javascript
// StudyGroupService.js
static async getActiveStudies() {
  const studies = await StudyGroupRepository.getStudiesByStatus('open');
  return studies.filter(s => s.maxParticipants > 0);
}
```

3. **Hook** - Add React integration
```javascript
// useStudyGroups.js
export function useActiveStudies() {
  const [studies, setStudies] = useState([]);
  // Subscribe or fetch using service
}
```

4. **Component** - Use the hook
```javascript
// Home.jsx
const { studies } = useActiveStudies();
return <StudyGrid studies={studies} />;
```

## Best Practices

### ✅ DO

- ✅ Keep components focused on UI only
- ✅ Put business logic in services
- ✅ Use custom hooks for data fetching
- ✅ Use repositories for all Firebase operations
- ✅ Handle errors with `handleServiceError()`
- ✅ Use UI component library for consistency
- ✅ Validate input at service boundary
- ✅ Document complex business logic

### ❌ DON'T

- ❌ Import Firebase directly in components
- ❌ Put business logic in components
- ❌ Duplicate database queries
- ❌ Mix concerns (data, logic, UI)
- ❌ Create inline styles (use component library)
- ❌ Catch errors without handling user message
- ❌ Create services that depend on components
- ❌ Use context for non-auth state (use services instead)

## Testing Strategy

### Unit Tests (Services)
```javascript
describe('StudyGroupService', () => {
  it('should reject study creation when limit exceeded', async () => {
    // Mock repository to return 5 studies
    // Assert service throws STUDY_LIMIT_EXCEEDED error
  });
});
```

### Integration Tests (Hooks)
```javascript
describe('useStudyGroups', () => {
  it('should load organizer studies', async () => {
    // Render hook with user context
    // Assert loading → loaded state
  });
});
```

### Component Tests
```javascript
describe('CreateStudy', () => {
  it('should show limit message when cannot create', () => {
    // Mock useCanCreateStudy to return canCreate: false
    // Assert limit message displays
  });
});
```

## Performance Optimizations

1. **Real-time Subscriptions** - Only subscribe when needed
2. **Lazy Loading** - Import components/services on demand
3. **Memoization** - Use React.memo for expensive components
4. **Bundle Size** - Monitor with build warnings

## Migration from Old Architecture

All pages have been refactored to use new architecture:
- ✅ `Home.jsx` - Uses `useAllStudyGroups` hook
- ✅ `CreateStudy.jsx` - Uses `StudyGroupService`, `TextEnhancerService`
- ✅ `StudyDetail.jsx` - Uses `useStudyGroup`, `ApplicationService`
- ✅ `Dashboard.jsx` - Uses multiple hooks and services
- ✅ `Login.jsx` - Unchanged (uses AuthContext)
- ✅ `Register.jsx` - Unchanged (uses AuthContext)

## Future Improvements

1. **Add TypeScript** - For better type safety
2. **Add Validation Schema** - Use Zod/Yup for input validation
3. **Add State Management** - Consider Zustand for global state if needed
4. **Add API Layer** - If backend is added, create API service layer
5. **Add Error Boundary** - React Error Boundary for error handling
6. **Add Analytics** - Track user actions
7. **Add Caching** - Cache frequently accessed data
