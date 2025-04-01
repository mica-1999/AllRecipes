# React Context API vs Prop Drilling

## What is Prop Drilling?

Prop drilling is a pattern in React where props are passed from a component to its nested child components through intermediate components that don't need these props. 

```jsx
// Example of prop drilling
function App() {
  const [user, setUser] = useState({ name: 'John' });
  
  return <Main user={user} />;
}

function Main({ user }) {
  return <Profile user={user} />;
}

function Profile({ user }) {
  return <UserInfo user={user} />;
}

function UserInfo({ user }) {
  return <p>Name: {user.name}</p>;
}
```

### Disadvantages of Prop Drilling:
- **Maintenance complexity**: When the application grows, tracking props through multiple component levels becomes difficult
- **Readability issues**: Intermediate components receive props they don't use, making code harder to understand
- **Refactoring challenges**: Adding or removing a prop requires changes in multiple components in the chain
- **Excessive re-renders**: Changes to props can cause unnecessary re-renders in components that just pass props down

## What is useContext?

`useContext` is a React Hook that provides a way to pass data through the component tree without having to pass props down manually at every level.

```jsx
// Example of using Context API
import { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const UserContext = createContext();

// Step 2: Create a provider component
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'John' });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Step 3: Use the context in any nested component
function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

function Main() {
  return <Profile />;
}

function Profile() {
  return <UserInfo />;
}

function UserInfo() {
  // Consume the context directly
  const { user } = useContext(UserContext);
  return <p>Name: {user.name}</p>;
}
```

### Advantages of useContext:
1. **Eliminates prop drilling**: Data can be accessed by any component in the tree without passing through intermediaries
2. **Simplified component structure**: Components only need to declare their data dependencies
3. **Centralized state management**: Related state can be managed in one location
4. **Cleaner component interfaces**: Components have cleaner props interfaces without unrelated passed-down props
5. **Easier refactoring**: Adding new global data doesn't require modifying the entire component chain

### When to Use Context:
- **Theming**: Application-wide appearance settings
- **User authentication**: Sharing logged-in user information
- **Localization/i18n**: Language preferences throughout the app
- **Feature flags**: Enabling/disabling features app-wide
- **Any global or semi-global state**: Data needed by many components

### When to Avoid Context:
- **Performance-critical components**: Context triggers re-renders in all consuming components
- **Shallow component trees**: Prop drilling is simpler for small component trees
- **Frequently changing data**: For high-frequency updates, other state management solutions may be better

## Context vs. Prop Drilling: When to Use Each

**Use Prop Drilling When:**
- The component tree is shallow (1-2 levels)
- The props are only needed by a few components
- The props change frequently and performance is critical

**Use Context When:**
- Data needs to be accessible by many components at different nesting levels
- You want to avoid "props plumbing" through intermediate components
- The shared state changes infrequently
- You want to keep component interfaces clean and focused

Context is not a replacement for all prop passing but rather a tool to be used when prop drilling becomes cumbersome or affects code maintainability.
