# Verdant Impact

## Overview

Verdant Impact is a climate-focused livestock commerce platform built as a full-stack TypeScript application. It features a React frontend with a modern green-themed UI for showcasing solutions, impact metrics, and a contact form, backed by an Express API server with PostgreSQL database storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and data fetching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming (green/nature palette)
- **Animations**: Framer Motion for complex animations, react-countup for animated numbers, react-intersection-observer for scroll-triggered effects
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Framework**: Express.js running on Node.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: REST endpoints defined in shared routes module with Zod schemas for validation
- **Storage Pattern**: Repository pattern via `IStorage` interface with `DatabaseStorage` implementation

### Project Structure
```
client/           # React frontend application
  src/
    components/   # UI components including shadcn/ui
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
    pages/        # Page components
server/           # Express backend
  db.ts           # Database connection
  routes.ts       # API route handlers
  storage.ts      # Data access layer
shared/           # Shared code between client/server
  schema.ts       # Drizzle table definitions and Zod schemas
  routes.ts       # API route contracts
```

### Build System
- Development: `tsx` for running TypeScript directly
- Production: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- Database migrations: Drizzle Kit with `db:push` command

### Type Safety
- Shared schemas in `shared/schema.ts` using drizzle-zod for automatic Zod schema generation from Drizzle tables
- API contracts defined in `shared/routes.ts` with input/output validation
- Path aliases configured: `@/` for client source, `@shared/` for shared code

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but not currently active in routes)

### UI Libraries
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-styled component collection (new-york style variant)
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend dev server and bundler with React plugin
- **esbuild**: Production server bundling
- **Drizzle Kit**: Database schema management and migrations

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development environment indicator