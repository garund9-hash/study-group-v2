# Getting Started with Wit.me

Welcome to Wit.me! This guide will help you set up the development environment and understand the project structure in 15 minutes.

---

## Quick Start (5 minutes)

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repo-url>
cd study-group-v2

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
# Edit .env.local with your Firebase and Gemini API keys
```

### 2. Start Development Server

```bash
npm run dev
# Server runs on http://localhost:5173
```

### 3. View the App

Open http://localhost:5173 in your browser. You should see:
- ✅ Wit.me homepage with study listings
- ✅ Navigation bar with login/register
- ✅ Real-time updates when creating/updating studies

---

## Project Overview (5 minutes)

### What is Wit.me?

Wit.me is a **study group matching platform** where users can:
- 🔍 Discover study groups by category
- 📋 Apply to join studies
- 👨‍💼 Create and manage their own study groups (organizers)
- ✅ Approve/reject applicants
- 📥 Export participant lists as CSV
- ✨ Use AI to enhance study descriptions

### Tech Stack

```
Frontend:
  • React 18 - UI framework
  • Vite - Build tool & dev server
  • Framer-motion - Animations
  • Tailwind / Vanilla CSS - Styling
  • Lucide React - Icons

Backend:
  • Firebase Auth - Authentication
  • Firestore - Real-time database

AI:
  • Gemini API - Description enhancement

Testing:
  • Vitest - Unit testing
  • React Testing Library - Component testing
```

---

## Architecture Overview (3 minutes)

### Layered Architecture

```
Pages (Home, Dashboard, etc.)
    ↓
Custom Hooks (useStudyGroups, useApplications)
    ↓
Services (StudyGroupService, ApplicationService)
    ↓
Repositories (StudyGroupRepository, ApplicationRepository)
    ↓
Firebase (Firestore, Auth)
```

**Why this structure?**
- ✅ Easy to test (mock repositories)
- ✅ Business logic reusable (multiple components use same service)
- ✅ Clear separation of concerns
- ✅ Easy to debug (data flows predictably)

### Key Files to Know

```
src/
├── App.jsx                          # Main routing, lazy-loaded pages
├── context/AuthContext.jsx          # Global auth state
├── pages/                           # Route components (Home, Dashboard, etc)
├── hooks/                           # Data fetching (useStudyGroups, etc)
├── services/                        # Business logic
│   ├── repositories/                # Database queries
│   ├── StudyGroupService.js
│   └── ApplicationService.js
├── components/ui/                   # Reusable UI (Button, Badge, etc)
└── utils/                           # Helpers (errorHandler, csvExporter)
```

---

## Common Tasks

### Task 1: Run Tests

```bash
# Watch mode (re-runs on file change)
npm run test

# Single run (for CI/CD)
npm run test:run
```

### Task 2: Build for Production

```bash
npm run build
# Creates optimized bundle in dist/ folder
```

### Task 3: Check Bundle Size

```bash
npm run build
# Output shows chunk sizes:
#   firebase chunk: 451KB (106KB gzipped)
#   vendor chunk: 162KB (53KB gzipped)
#   ui chunk: 123KB (40KB gzipped)
```

### Task 4: Add a New Feature

Example: Add a "Featured Studies" section to Home

1. **Create the service method** (if needed)
   ```javascript
   // services/StudyGroupService.js
   static async getFeaturedStudies() {
     // ...
   }
   ```

2. **Create the hook**
   ```javascript
   // hooks/useStudyGroups.js
   export function useFeaturedStudies() {
     const [studies, setStudies] = useState([]);
     useEffect(() => {
       // Call service method
     }, []);
     return { studies, loading };
   }
   ```

3. **Use in component**
   ```javascript
   // pages/Home.jsx
   const { studies: featured } = useFeaturedStudies();
   return <FeaturedSection studies={featured} />;
   ```

4. **Add tests**
   ```bash
   touch src/services/__tests__/StudyGroupService.test.js
   # Write tests for new method
   ```

---

## Environment Variables

Create `.env.local` in the project root with:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Gemini API
VITE_GEMINI_API_KEY=your_gemini_api_key
```

**Where to find these:**
- Firebase: [Firebase Console](https://console.firebase.google.com/)
- Gemini: [Google AI Studio](https://aistudio.google.com/)

---

## Debugging Tips

### 1. React DevTools
```bash
# Install React DevTools browser extension
# Then in DevTools: Components tab shows component tree
```

### 2. Firebase DevTools
```javascript
// In console, enable Firestore logging
firebase.firestore.enableLogging(true);
```

### 3. Network Tab
- Open DevTools → Network tab
- Filter by `fetch` to see API calls
- Check Firestore subscriptions in real-time

### 4. Common Errors

**Error**: "Cannot read property 'uid' of null"
- **Cause**: `currentUser` is null (not logged in)
- **Fix**: Wrap code in `if (currentUser) { ... }`

**Error**: "Missing or insufficient permissions"
- **Cause**: Firebase Firestore rules don't allow operation
- **Fix**: Check `.firebaserc` and `firestore.rules`

**Error**: "Too many requests"
- **Cause**: API rate limit (Gemini, etc.)
- **Fix**: Add delays between requests or upgrade plan

---

## Code Examples

### Example 1: Create a Study

```javascript
// In a component
import { StudyGroupService } from '../services/StudyGroupService';
import { handleServiceError } from '../utils/errorHandler';

export function CreateStudyForm() {
  const { currentUser, userData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');
    try {
      await StudyGroupService.createStudyGroup(
        formData,
        currentUser.uid,
        userData.displayName
      );
      navigate('/');  // Go home, hook will see new study
    } catch (err) {
      const { message } = handleServiceError(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  };
}
```

### Example 2: Display Real-time Studies

```javascript
// In a component
import { useAllStudyGroups } from '../hooks/useStudyGroups';

export function StudyList() {
  const { studies, loading } = useAllStudyGroups();

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {studies.map(study => (
        <StudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}
```

### Example 3: Handle Application Approval

```javascript
// In Dashboard
import { ApplicationService } from '../services/ApplicationService';

const handleApprove = async (appId) => {
  try {
    await ApplicationService.approveApplication(appId, currentUser.uid);
    // UI updates automatically via subscription
  } catch (err) {
    const { message } = handleServiceError(err);
    setError(message);
  }
};
```

---

## Testing Your Changes

### Unit Test Example

```javascript
// src/services/__tests__/StudyGroupService.test.js
import { describe, it, expect, vi } from 'vitest';
import { StudyGroupService } from '../StudyGroupService';
import * as StudyGroupRepository from '../../repositories/StudyGroupRepository';

vi.mock('../../repositories/StudyGroupRepository');

describe('StudyGroupService', () => {
  it('should create a study', async () => {
    // Arrange
    StudyGroupRepository.createStudyGroup.mockResolvedValue({
      id: '123',
      title: 'Test Study'
    });

    // Act
    const result = await StudyGroupService.createStudyGroup(
      { title: 'Test Study' },
      'user-123',
      'John Doe'
    );

    // Assert
    expect(result.id).toBe('123');
    expect(StudyGroupRepository.createStudyGroup).toHaveBeenCalled();
  });
});
```

### Run Tests

```bash
# Run all tests
npm run test:run

# Run specific test file
npm run test src/services/__tests__/StudyGroupService.test.js

# Watch mode
npm run test
```

---

## Git Workflow

### Creating a Feature Branch

```bash
# Create branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name

# Make changes
git add .
git commit -m "feat: add your feature description"

# Push and create PR
git push origin feature/your-feature-name
```

### Commit Message Format

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
refactor: Refactor code
test: Add tests
perf: Performance improvement
chore: Maintenance tasks
```

---

## Performance Considerations

### 1. Bundle Size
- Pages are lazy-loaded (don't load upfront)
- Firebase and vendor code split into separate chunks
- Check with `npm run build`

### 2. Database Queries
- Use `limit(20)` on list queries to avoid fetching huge collections
- Firestore rules must allow read/write operations

### 3. React Performance
- UI components are memoized to prevent unnecessary re-renders
- Context uses `useMemo` and `useCallback` to optimize subscriptions
- Extract animation objects to avoid recreating on render

### 4. Memory
- Always revoke blob URLs: `URL.revokeObjectURL(url)`
- Unsubscribe from Firestore listeners (hooks handle this)

---

## Useful Resources

### Documentation
- [ADR.md](./docs/ADR.md) - Architecture decisions
- [Walkthrough.md](./docs/Walkthrough.md) - Code walkthrough
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Architecture overview

### External
- [React Docs](https://react.dev/)
- [Firebase Docs](https://firebase.google.com/docs)
- [Vite Docs](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)

---

## Troubleshooting

### Port 5173 Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 5174
```

### Dependencies Not Installing

```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Firebase Not Connecting

1. Check `.env.local` has all Firebase keys
2. Verify Firebase project exists and is active
3. Check Firestore rules allow your user
4. Look at browser Console for auth errors

### Tests Failing

```bash
# Run single test to see detailed error
npm run test src/__tests__/specific.test.js

# Check if node_modules needs reinstall
rm -rf node_modules
npm install
npm run test:run
```

---

## Next Steps

1. ✅ **Set up environment** (you are here!)
2. 📖 Read [Walkthrough.md](./docs/Walkthrough.md) to understand codebase
3. 🔍 Review [ADR.md](./docs/ADR.md) for architecture decisions
4. 🎯 Pick a task from Issues
5. 🧪 Write tests for your changes
6. 🚀 Submit a pull request

---

## Need Help?

- 📖 Check [Walkthrough.md](./docs/Walkthrough.md) for detailed examples
- 🐛 Debug using React DevTools + browser DevTools
- 💬 Ask questions in team chat
- 🔍 Search existing code for similar patterns

---

**Happy coding! 🎉**
