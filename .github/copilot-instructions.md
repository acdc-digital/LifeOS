# LifeOS Project Instructions

You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI and Tailwind.
You use the latest versions of popular frameworks and libraries such as React & NextJS (with app router).
You provide accurate, factual, thoughtful answers, and are a genius at reasoning.

## AI Development Tools Integration

This project uses multiple AI development tools working together:

- **GitHub Copilot**: For code completion and inline suggestions
- **Claude Sonnet 4**: For complex problem solving and architectural guidance (see `.github/instructions/claude.instructions.md`)
- **Convex MCP Server**: For database and backend assistance

## Project Overview

LifeOS is a modern web application built with a pnpm workspace monorepo structure that delivers exceptional user experience through real-time data synchronization and a responsive design system.

## Approach

- This project uses Next.js App Router - never suggest using the pages router or provide code using the pages router
- Follow the user's requirements carefully & to the letter
- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail
- Confirm, then write code!
- Always write correct, up to date, bug free, fully functional and working, secure, performant and efficient code

## Key Principles

- Focus on readability over being performant
- Fully implement all requested functionality
- Leave NO todo's, placeholders or missing pieces
- Be sure to reference file names
- Be concise. Minimize any other prose
- If you think there might not be a correct answer, you say so. If you do not know the answer, say so instead of guessing
- Only write code that is necessary to complete the task
- Rewrite the complete code only if necessary
- Update relevant tests or create new tests if necessary

## Architecture & Tech Stack

### Core Technologies

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **Database**: Convex (real-time backend)
- **Authentication**: Clerk (JWT-based)
- **State Management**: Zustand (client state) + Convex (server state)
- **Package Manager**: pnpm (workspace monorepo)

## Repository Structure

```
LifeOS/
├── .github/                # GitHub configuration and workflows
├── .vscode/                # VS Code workspace settings
├── LifeOS/                 # Main Next.js application (red project folder)
│   ├── app/                # Next.js App Router pages and layouts
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utility functions and configurations
│   ├── convex/             # Convex backend functions and schema
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── public/             # Static assets
├── packages/               # Shared workspace packages
├── apps/                   # Additional applications
├── tools/                  # Development tools and scripts
├── docs/                   # Documentation and notebooks
├── package.json            # Root workspace configuration
└── pnpm-workspace.yaml     # pnpm workspace definition
```

## Tech Stack

- Next.js 15+ with App Router (never use pages router)
- Convex for real-time database and backend functions
- TypeScript with strict type checking
- Shadcn UI and Radix UI for components
- Tailwind CSS for styling
- pnpm for package management
- React 19+ with Server Components

## Coding Standards

### File Header Requirements

- **ALWAYS add descriptive file headers to every new file, script, or page**
- Include the file purpose and absolute filepath for context and organization
- Use consistent comment formatting across all file types

**Header Format:**

```typescript
// [PURPOSE] - Brief description
// [ABSOLUTE_FILEPATH]

// Rest of your code...
```

**Examples:**

```typescript
// HOMEPAGE - Main landing page for LifeOS platform
// /Users/matthewsimon/Projects/LifeOS/LifeOS/app/page.tsx

// USER AUTHENTICATION - Clerk auth integration
// /Users/matthewsimon/Projects/LifeOS/LifeOS/lib/auth.ts

// CONVEX SCHEMA - Database table definitions
// /Users/matthewsimon/Projects/LifeOS/LifeOS/convex/schema.ts

// API ROUTE - User profile management endpoint
// /Users/matthewsimon/Projects/LifeOS/LifeOS/app/api/users/route.ts
```

**Requirements:**

- First line: Purpose in ALL CAPS with brief description
- Second line: Complete absolute filepath
- Third line: Empty line before code begins
- Apply to all TypeScript, JavaScript, and React files

### Naming Conventions

- Use lowercase with dashes for directories (e.g., `components/auth-wizard`)
- Files: kebab-case (`user-profile.tsx`)
- Components: PascalCase (`UserProfile`)
- Functions: camelCase (`getUserData`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- Types/Interfaces: PascalCase (`UserProfileData`)
- Favor named exports for components

### TypeScript Rules

- Use TypeScript for all code - prefer interfaces over types
- Avoid enums - use maps instead
- Use functional components with TypeScript interfaces
- Define proper interfaces for props and data
- Use strict type checking
- Implement proper error handling with try/catch

### React/Next.js Patterns

- Use React Server Components by default
- Minimize 'use client', 'useEffect', and 'setState' - favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Add 'use client' only when client-side features needed
- Prefer function components over class components
- Use custom hooks for reusable stateful logic
- Implement proper error boundaries
- Use Next.js optimizations (Image, Link, etc.)

### UI and Styling Guidelines

- Use Shadcn UI, Radix UI, and Tailwind for components and styling
- Implement responsive design with Tailwind CSS - use mobile-first approach
- Follow mobile-first responsive design
- Implement proper accessibility (ARIA labels, semantic HTML)
- Use CSS variables for theme values

### Performance Optimization

- Optimize images: use WebP format, include size data, implement lazy loading
- Minimize bundle size with tree shaking
- Use proper code splitting
- Implement proper caching strategies

### Convex Database Patterns

- Use Convex queries for read operations with caching and reactivity
- Use Convex mutations for write operations with ACID transactions
- Use Convex actions for external API calls and side effects
- Implement proper error handling with ConvexError for application errors
- Use TypeScript schema validation for data integrity
- Follow real-time subscription best practices for reactive UX
- Reference comprehensive Convex guidelines in `.github/instructions/convex-comprehensive.instructions.md`

## Component Structure Template

```typescript
import { FC } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserData } from '@/types/user'

interface UserProfileProps {
  userData: UserData
  onUserUpdate?: (user: UserData) => void
}

export const UserProfile: FC<UserProfileProps> = ({
  userData,
  onUserUpdate
}) => {
  return (
    <div className="space-y-4">
      {/* Component JSX */}
    </div>
  )
}
```

### 1. **State Management Architecture**

- **Server State**: Use Convex for all persistent data (users, projects, files)
- **Client State**: Use Zustand only for UI-specific state (sidebar, modals, etc.)
- **Never duplicate server data in client state**
- Always use Convex hooks (`useQuery`, `useMutation`) for data fetching

### 2. **Component Patterns**

```typescript
// ✅ Preferred component structure
export const ComponentName = () => {
  // 1. Hooks first
  const convexData = useQuery(api.collection.getAll);
  const mutation = useMutation(api.collection.create);

  // 2. Local state
  const [localState, setLocalState] = useState();

  // 3. Effects
  useEffect(() => {
    // Side effects
  }, []);

  // 4. Event handlers
  const handleAction = () => {
    // Action logic
  };

  // 5. Early returns
  if (!convexData) return <LoadingSpinner />;

  // 6. Render
  return (
    <div className="component-structure">
      {/* JSX */}
    </div>
  );
};
```

### 3. **Styling Guidelines**

- Use Tailwind CSS classes exclusively
- Follow VS Code dark theme color palette
- Key colors:
  - Background: `bg-[#1e1e1e]`
  - Secondary: `bg-[#252526]`
  - Border: `border-[#2d2d30]`
  - Text: `text-[#cccccc]`
  - Accent: `text-[#007acc]`

### 4. **File Naming Conventions**

- Components: `PascalCase.tsx`
- Hooks: `use*.ts`
- Utilities: `camelCase.ts`
- Constants: `UPPER_CASE.ts`
- API routes: `route.ts`

### 5. **Import Organization**

```typescript
// 1. React imports
import React, { useState, useEffect } from "react";

// 2. Third-party libraries
import { useQuery, useMutation } from "convex/react";
import { useAuth } from "@clerk/nextjs";

// 3. Internal imports (absolute paths)
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

// 4. Relative imports
import "./ComponentName.css";
```

### 6. **Authentication Patterns**

```typescript
// Always check authentication state
const { isAuthenticated, isLoading } = useAuth();

if (isLoading) return <LoadingSpinner />;
if (!isAuthenticated) return <SignInCard />;

// Proceed with authenticated logic
```

### 7. **Error Handling**

```typescript
// Use try-catch for mutations
const handleMutation = async () => {
  try {
    await mutation({ data });
    toast.success("Success message");
  } catch (error) {
    toast.error("Error message");
    console.error("Detailed error:", error);
  }
};
```

## AI Agent System

### Agent Architecture

- **Base Agent**: All agents extend `BaseAgent` class
- **Registry**: Centralized agent management via `AgentRegistry`
- **Store**: Zustand store for agent state (`useAgentStore`)

### Creating New Agents

```typescript
export class CustomAgent extends BaseAgent {
  constructor() {
    super({
      id: "custom-agent",
      name: "Custom Agent",
      description: "Agent description",
      version: "1.0.0",
    });
  }

  async execute(context: AgentContext): Promise<AgentResponse> {
    // Agent logic
    return {
      success: true,
      data: result,
    };
  }
}
```

## Extension System

### Extension Structure

- **Base Extension**: All extensions extend `BaseExtension`
- **Registry**: Managed via `ExtensionRegistry`
- **Lifecycle**: `initialize()`, `activate()`, `deactivate()`

## Terminal System

### Terminal Features

- Multi-tab support
- Command history
- Agent integration
- Real-time updates via Convex

### Adding Terminal Commands

```typescript
// Add to terminal command handler
const executeCommand = async (command: string) => {
  switch (command.toLowerCase()) {
    case "custom-command":
      return "Custom command output";
    default:
      return "Command not found";
  }
};
```

## Database Schema (Convex)

### Key Tables

- `users`: User profiles and settings
- `projects`: User projects and metadata
- `files`: File system with hierarchical structure
- `socialPosts`: Scheduled social media posts
- `socialConnections`: Connected social accounts

### Schema Patterns

```typescript
// Always include metadata
export const tableName = defineTable({
  // Required fields
  userId: v.id("users"),

  // Data fields
  name: v.string(),

  // Metadata (consistent across all tables)
  createdAt: v.number(),
  updatedAt: v.number(),
  isDeleted: v.boolean(),
})
  .index("by_user", ["userId"])
  .index("by_created", ["createdAt"]);
```

## Testing Guidelines

### Testing Structure

- Unit tests for utilities and hooks
- Integration tests for components
- E2E tests for critical user flows

### Test File Naming

- `*.test.ts` - Unit tests
- `*.spec.ts` - Integration tests
- `*.e2e.ts` - End-to-end tests

## Performance Guidelines

### Optimization Strategies

- Use React.memo for expensive components
- Implement proper loading states
- Optimize Convex queries with indexes
- Use dynamic imports for code splitting

### Bundle Management

- Keep bundle size minimal
- Use tree shaking effectively
- Implement lazy loading for routes

## Security Considerations

### Authentication

- All API routes protected by Clerk middleware
- JWT tokens handled securely
- User data isolated by userId

### Data Validation

- Validate all inputs on both client and server
- Use Convex validators for schema enforcement
- Sanitize user-generated content

## Common Patterns & Best Practices

### 1. **Loading States**

```typescript
const data = useQuery(api.table.getAll);

if (data === undefined) {
  return <LoadingSpinner />;
}

return <DataComponent data={data} />;
```

### 2. **Error Boundaries**

```typescript
// Wrap components in error boundaries
<ErrorBoundary fallback={<ErrorFallback />}>
  <Component />
</ErrorBoundary>
```

### 3. **Responsive Design**

```typescript
// Use Tailwind responsive prefixes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### 4. **Accessibility**

- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios

## Code Quality Standards

### TypeScript

- Strict mode enabled
- No `any` types (use `unknown` if needed)
- Prefer interfaces over types for objects
- Use generic types for reusable components

### ESLint Rules

- No unused variables
- Consistent import ordering
- Prefer const over let
- No console.log in production

### Formatting

- Prettier for code formatting
- 2-space indentation
- Single quotes for strings
- Trailing commas in multiline

## Deployment & DevOps

### Development Workflow

1. Create feature branch
2. Implement changes
3. Run tests locally
4. Create pull request
5. Deploy to staging
6. Deploy to production

### Environment Variables

```bash
# Required environment variables
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
```

## Debugging & Development Tools

### Debug System

- Integrated debug panel in activity bar
- State inspection tools
- Performance monitoring
- Error tracking

### Development Commands

```bash
# Start development server
pnpm dev

# Run Convex in dev mode
pnpm convex dev

# Run tests
pnpm test

# Build for production
pnpm build
```

---

## 🤖 Copilot Guidelines

When working on LifeOS:

1. **Always follow the established patterns** above
2. **Use TypeScript strictly** - no any types
3. **Follow the component structure** outlined
4. **Respect the state management architecture** - Convex for server state, Zustand for UI state
5. **Use the established styling system** with Tailwind CSS
6. **Include proper error handling** and loading states
7. **Write tests** for new functionality
8. **Follow naming conventions** consistently
9. **Consider accessibility** in all UI components
10. **Keep security in mind** - validate inputs, protect routes

Remember: LifeOS is a **professional-grade application** focused on **developer experience**, **performance**, and **maintainability**.
