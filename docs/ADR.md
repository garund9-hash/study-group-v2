# Architecture Decision Records (ADR)

This document records the key architectural decisions made during the evolution of the Wit.me study group platform. Each ADR captures the problem, the solution chosen, and the rationale.

---

## ADR-001: Layered Architecture Pattern

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Architecture

### Problem
The initial codebase mixed business logic, data access, and UI concerns in components, making code difficult to test, reuse, and maintain. Firebase operations were scattered throughout components, and business rules had no single source of truth.

### Solution
Implement a **layered architecture** with strict separation of concerns:

```
Pages (UI)
  ↓
Custom Hooks (State Management)
  ↓
Services (Business Logic)
  ↓
Repositories (Data Access)
  ↓
Firebase (External Service)
```

### Rationale
- **Testability**: Services can be tested in isolation by mocking repositories
- **Reusability**: Services can be used by multiple components; repositories by multiple services
- **Maintainability**: Changes to business logic, data access, or UI are isolated
- **Clarity**: Each layer has a single responsibility

### Implementation Details
- **Repository Layer**: `StudyGroupRepository.js`, `ApplicationRepository.js`
- **Service Layer**: `StudyGroupService.js`, `ApplicationService.js`, `TextEnhancerService.js`
- **Hook Layer**: `useStudyGroups.js`, `useApplications.js`
- **UI Layer**: Pages and components consume hooks

### Trade-offs
- ❌ More files and boilerplate compared to monolithic approach
- ✅ Significant gains in maintainability and testability

---

## ADR-002: React Context for Authentication Only

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: State Management

### Problem
Global state management libraries (Redux, Zustand) add complexity for simple needs. However, authentication state needs to be accessible throughout the app without prop drilling.

### Solution
Use **React Context exclusively for authentication state** (AuthContext), while keeping domain-specific state (studies, applications) in services + custom hooks.

### Rationale
- **Simplicity**: No additional dependencies for a single global concern
- **Scope**: Auth state is truly global; other state is domain-specific
- **Patterns**: Aligns with React best practices for auth
- **Performance**: Services + hooks avoid context re-render cascades for frequently-changing data

### Implementation Details
- `AuthContext.jsx` provides `useAuth()` hook
- Contains: `currentUser`, `userData`, `signup`, `login`, `logout`
- Wrapped with `useCallback` and `useMemo` to prevent unnecessary re-renders

### Trade-offs
- ✅ Lightweight, no extra dependencies
- ❌ Would need refactoring if global state becomes complex

---

## ADR-003: Custom Hooks Over Render Props/HOCs

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: React Patterns

### Problem
Components need to fetch and subscribe to Firestore data in a reusable way. Traditional patterns (render props, HOCs) add complexity.

### Solution
Implement **custom React hooks** as the primary pattern for data fetching and subscription management.

### Rationale
- **Modern React**: Hooks are the recommended pattern post-React 16.8
- **Composability**: Hooks compose naturally with other hooks
- **Simplicity**: No wrapper component hell or prop nesting
- **Testability**: Hooks can be tested with `react-hooks-testing-library`

### Implementation Details
- `useAllStudyGroups()` - Subscribe to all studies
- `useStudyGroup(id)` - Subscribe to single study
- `useOrganizerStudyGroups(organizerId)` - Organizer-filtered subscription
- `useUserApplications(userId)` - User's application subscriptions

### Trade-offs
- ✅ Cleaner component tree
- ✅ Better code reuse
- ❌ Requires familiarity with hooks API

---

## ADR-004: Real-time Firestore Subscriptions

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Data Access

### Problem
Need to reflect changes in real-time across the app when users apply/approve applications, create studies, etc.

### Solution
Use **Firestore `onSnapshot` listeners** in custom hooks for real-time data synchronization.

### Rationale
- **Real-time UX**: Users see updates immediately without polling
- **Resource Efficient**: Server pushes only when data changes
- **Firestore Native**: First-class support with automatic cleanup
- **Consistency**: Single source of truth maintained across clients

### Implementation Details
- Repository methods: `subscribeToAllStudyGroups()`, `subscribeToUserApplications()`
- Hooks handle subscription lifecycle (setup on mount, cleanup on unmount)
- Callbacks update local state, triggering component re-renders

### Trade-offs
- ✅ Excellent UX for collaborative features
- ❌ Requires proper unsubscribe cleanup (handled by hooks)

---

## ADR-005: Custom Error Handling with AppError Class

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Error Handling

### Problem
Different error types (validation, auth, network, business logic) need different user-facing messages. Firebase errors are cryptic and expose implementation details.

### Solution
Create an **AppError class** with error codes and a **handleServiceError utility** to convert errors to user-friendly messages.

### Rationale
- **Consistency**: All errors follow same structure with code + message
- **UX**: Users see friendly messages, not technical Firebase error codes
- **Internationalization**: Error messages centralized, easy to translate
- **Debugging**: Dev logs preserve original error for debugging

### Implementation Details
- `AppError` class with code and message
- `handleServiceError()` function maps error codes to user messages
- Components catch errors and display using `ErrorMessage` component
- Development mode shows full error in console

### Trade-offs
- ✅ Much better user experience
- ✅ Centralized error handling
- ❌ Minor code verbosity in service layer

---

## ADR-006: Component Memoization for Performance

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance

### Problem
Pure presentational components (Button, Badge, Card) were re-rendering on parent re-renders, causing unnecessary reconciliation, especially in lists.

### Solution
Wrap pure UI components with **React.memo** to prevent re-renders when props haven't changed.

### Rationale
- **Performance**: Prevents expensive renders of unmemoized subtrees
- **Lists**: Critical for lists where Button/Badge rendered many times
- **Purity**: These components have no side effects, safe to memoize
- **Cost**: Memoization is free for simple components

### Implementation Details
- Wrapped components: `Button`, `StatusBadge`, `CategoryTag`, `ErrorMessage`
- Exported as: `export const Button = React.memo(function Button(...) {...})`
- Applied to all "dumb" presentational components

### Trade-offs
- ✅ Measurable performance improvement in lists
- ❌ Minor dev-time overhead checking if component should be memoized

---

## ADR-007: Code Splitting with React.lazy and Route-Based Chunks

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / Bundle Optimization

### Problem
Initial bundle contained all 6 pages (800KB uncompressed) loaded upfront, slowing first-paint time regardless of user's current route.

### Solution
Use **React.lazy() for dynamic imports** of page components combined with **Suspense boundaries** for loading states.

### Rationale
- **Faster Initial Load**: Only critical path code loaded initially
- **Route-Based**: Users only download code for routes they visit
- **Built-in**: Vite + React.lazy handle bundling automatically
- **UX**: Suspense provides graceful loading feedback

### Implementation Details
- Convert: `import Home from './pages/Home'`
- To: `const Home = lazy(() => import('./pages/Home'))`
- Wrap routes in: `<Suspense fallback={<LoadingState />}>`
- All 6 pages: Home, Login, Register, CreateStudy, StudyDetail, Dashboard

### Trade-offs
- ✅ Significant initial bundle reduction (~40%)
- ❌ Slight delay when navigating to lazy-loaded routes

---

## ADR-008: Manual Chunk Configuration for Vendor Code

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / Bundle Optimization

### Problem
After code splitting, the remaining main chunk still included heavy vendor libraries (Firebase 450KB, React ecosystem 150KB) mixed with app code, preventing optimal caching.

### Solution
Configure **Rollup manualChunks** to separate vendor, Firebase, and UI library code into dedicated chunks.

### Rationale
- **Better Caching**: Vendor code rarely changes, can be cached separately
- **Parallel Loading**: Browser downloads chunks in parallel
- **Cleaner Main**: App code in smaller chunk loads faster
- **Flexibility**: Easy to adjust chunk boundaries as app grows

### Implementation Details
- **Vendor chunk**: react, react-dom, react-router-dom
- **Firebase chunk**: firebase/app, firebase/auth, firebase/firestore
- **UI chunk**: framer-motion, lucide-react
- Configuration in `vite.config.js` under `build.rollupOptions.output.manualChunks`

### Result
- Firebase: 451KB (106KB gzipped)
- Vendor: 162KB (53KB gzipped)
- UI: 123KB (40KB gzipped)
- App: Multiple smaller chunks

### Trade-offs
- ✅ Optimal cache busting strategy
- ✅ Better network parallelization
- ❌ More chunks to manage (browser overhead minimal)

---

## ADR-009: Pagination for Firestore Queries

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / Scalability

### Problem
`getAllStudyGroups()` used unbounded `getDocs()`, fetching entire collection. Performance degraded as collection grew, and subscription listeners broadcast all documents.

### Solution
Apply **limit clause** to all list queries with sensible defaults and make page size configurable.

### Rationale
- **Scalability**: App doesn't degrade as collection grows
- **Performance**: Network and parsing cost capped at ~20 documents
- **UX**: Page typically shows ~10 items, fetching 20 is reasonable
- **Future-Ready**: Foundation for implementing pagination UI

### Implementation Details
- Added `DEFAULT_PAGE_SIZE = 20` constant
- `getAllStudyGroups(pageSize = DEFAULT_PAGE_SIZE)`
- `subscribeToAllStudyGroups(callback, pageSize = DEFAULT_PAGE_SIZE)`
- Applied `limit(pageSize)` after `orderBy()`

### Trade-offs
- ✅ Prevents N+1 problems and runaway queries
- ❌ UI doesn't show "load more" yet (future work)

---

## ADR-010: Memory Management - URL.revokeObjectURL

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / Memory Optimization

### Problem
CSV export created blob URLs but never revoked them, leaking 10-100KB per export. App with 1000 exports would leak 10-100MB of memory.

### Solution
Call **`URL.revokeObjectURL(url)` immediately after download** to free browser resources.

### Rationale
- **Browser Memory**: Blob URLs hold references to memory until revoked
- **Cost**: No performance cost, just requires discipline
- **Scale**: Critical for features with many exports

### Implementation Details
```javascript
const url = URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = filename;
link.click();
URL.revokeObjectURL(url);  // ← Free memory
```

### Trade-offs
- ✅ Prevents long-term memory leaks
- ✅ No downside, essential practice
- ❌ Requires awareness of pattern

---

## ADR-011: Context Memoization with useCallback and useMemo

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / React Optimization

### Problem
`AuthContext.value` object was recreated on every render, causing all `useAuth()` consumers to re-render even when data hadn't changed (cascade re-render problem).

### Solution
Wrap functions in **useCallback** and context value in **useMemo** with proper dependency arrays.

### Rationale
- **Prevents Cascades**: Consumers only re-render if actual data changes
- **Correctness**: Dependency arrays ensure memoization updates when needed
- **Best Practice**: Recommended pattern for context providers

### Implementation Details
- `signup`, `login`, `logout` wrapped in `useCallback(..., [])`
- `value` object wrapped in `useMemo(() => ({...}), [currentUser, userData, signup, login, logout])`
- Dependencies are stable due to useCallback on functions

### Trade-offs
- ✅ Eliminates cascading re-renders
- ✅ Minimal code overhead
- ❌ Requires careful dependency management

---

## ADR-012: Animation Variants as Module Constants

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Performance / Code Quality

### Problem
Framer-motion animation objects defined inline (e.g., `initial={{ opacity: 0, y: 20 }}`) were recreated on every render, and inconsistent across pages.

### Solution
Extract animation objects to **module-level constants** and reuse via object spread syntax.

### Rationale
- **Consistency**: All fade animations look identical
- **Performance**: Objects created once at module load, reused
- **Maintainability**: Change animation timing in one place
- **Readability**: Meaningful names (`fadeInUp`, `scaleIn`) vs anonymous objects

### Implementation Details
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

<motion.div {...fadeInUp}>...</motion.div>
```

### Applied To
- Home.jsx, StudyDetail.jsx, CreateStudy.jsx
- Dashboard.jsx, Register.jsx, Login.jsx

### Trade-offs
- ✅ Cleaner, more maintainable code
- ✅ Modest performance improvement
- ❌ Requires discipline to name variants well

---

## ADR-013: Error Logging Guard for Production

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Security / Operations

### Problem
Bare `console.error()` calls in catch blocks expose error internals to users in production, potentially leaking sensitive information (API details, stack traces).

### Solution
Wrap console calls in **development environment guard**: `if (import.meta.env.DEV) console.error(err)`

### Rationale
- **Security**: Prevents accidental exposure of implementation details
- **User UX**: Users see friendly error message, not technical stack
- **Dev Experience**: Developers still see full error in dev environment
- **Simplicity**: Single-line guard, no extra overhead

### Implementation Details
```javascript
catch (err) {
  setError('User-friendly message');
  if (import.meta.env.DEV) console.error(err);  // Dev only
}
```

### Applied To
- Login.jsx, Register.jsx, and all service error handlers

### Trade-offs
- ✅ Better security posture
- ✅ No production overhead
- ❌ Requires discipline across codebase

---

## ADR-014: Vitest for Unit Testing Framework

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Testing / Build

### Problem
Need a test framework that:
1. Works seamlessly with Vite (no extra build setup)
2. Supports browser globals (`describe`, `it`, etc.) without configuration
3. Understands `import.meta.env` for environment-specific testing

### Solution
Adopt **Vitest** as the native Vite test runner.

### Rationale
- **Native Integration**: Vite plugin provides zero-config testing
- **Jest-Compatible**: Drop-in replacement with same API
- **ESM First**: Full ES modules support without Babel
- **Speed**: Significantly faster than Jest due to Vite's esbuild
- **Config Sharing**: Uses same vite.config.js for consistent environment

### Implementation Details
- `npm run test` - Watch mode
- `npm run test:run` - Single run (CI)
- Config in vite.config.js under `test` section
- All tests in `__tests__` or `.test.js` files

### Trade-offs
- ✅ Zero configuration overhead
- ✅ Faster test execution
- ✅ Better integration with dev server
- ❌ Smaller community than Jest

---

## ADR-015: CSV Export Over Database-Backed Report

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Features / Data Export

### Problem
Organizers need to export participant lists. Options: client-side CSV export vs. server-side report generation.

### Solution
Implement **client-side CSV export** for simplicity and cost savings.

### Rationale
- **Cost**: No server infrastructure needed
- **Privacy**: Data never leaves user's browser
- **UX**: Immediate download without server round-trip
- **Simplicity**: ~20 lines of code in `csvExporter.js`
- **Limitations**: Acceptable for small participant lists

### Implementation Details
```javascript
export function exportParticipantsToCSV(participants, studyTitle) {
  const headers = ['Name', 'Email', 'Applied At'];
  const csvContent = [headers, ...rows].join('\n');
  const blob = new Blob([csvContent], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  // Download via anchor tag
  URL.revokeObjectURL(url);
}
```

### Trade-offs
- ✅ Simple, no backend needed
- ✅ Instant download
- ❌ Doesn't scale to 10k+ rows

---

## ADR-016: Gemini AI for Description Enhancement

**Status**: ✅ Implemented
**Date**: 2026-03-14
**Category**: Features / AI Integration

### Problem
Study creators need help writing engaging descriptions. Options: manual suggestions vs. AI enhancement.

### Solution
Integrate **Google Gemini API** (free tier) for optional description enhancement.

### Rationale
- **Cost**: Free tier suitable for low-volume usage
- **UX**: Optional feature, doesn't block form submission
- **Value**: Helps non-native speakers and busy organizers
- **Isolation**: Encapsulated in `TextEnhancerService`

### Implementation Details
- `TextEnhancerService.enhanceStudyDescription(title, description)`
- Calls Gemini with system prompt for study description enhancement
- Isolated API key in environment variables
- Error handling gracefully falls back to manual text

### Trade-offs
- ✅ Adds value with minimal code
- ✅ Free tier viable for MVP
- ❌ API quota limits for high volume

---

## Decision Log

| # | Title | Status | Date |
|---|-------|--------|------|
| 001 | Layered Architecture | ✅ | 2026-03-14 |
| 002 | Context for Auth Only | ✅ | 2026-03-14 |
| 003 | Custom Hooks Pattern | ✅ | 2026-03-14 |
| 004 | Real-time Subscriptions | ✅ | 2026-03-14 |
| 005 | Custom Error Handling | ✅ | 2026-03-14 |
| 006 | Component Memoization | ✅ | 2026-03-14 |
| 007 | Code Splitting | ✅ | 2026-03-14 |
| 008 | Manual Chunks | ✅ | 2026-03-14 |
| 009 | Query Pagination | ✅ | 2026-03-14 |
| 010 | URL Revocation | ✅ | 2026-03-14 |
| 011 | Context Memoization | ✅ | 2026-03-14 |
| 012 | Animation Constants | ✅ | 2026-03-14 |
| 013 | Error Logging Guard | ✅ | 2026-03-14 |
| 014 | Vitest Framework | ✅ | 2026-03-14 |
| 015 | CSV Export | ✅ | 2026-03-14 |
| 016 | Gemini Integration | ✅ | 2026-03-14 |

---

## How to Use This Document

1. **Understanding Decisions**: Read ADRs to understand "why" behind architectural choices
2. **Onboarding**: New developers should review ADRs 001-003 to understand the core architecture
3. **Adding Features**: When implementing new features, check ADRs for patterns to follow
4. **Trade-offs**: Each ADR discusses trade-offs; consider them when proposing changes
5. **Future ADRs**: When making significant decisions, create a new ADR to document it
