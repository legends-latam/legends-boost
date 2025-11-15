# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Legends Boost landing page built with React, TypeScript, Vite, and shadcn-ui. It's a single-page application (SPA) showcasing a gaming boost service with multiple landing page sections.

## Development Commands

```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build in development mode
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy-legends
```

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Router**: React Router DOM v6
- **Styling**: Tailwind CSS with shadcn-ui components
- **UI Components**: Radix UI primitives via shadcn-ui
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query (React Query)
- **Theming**: next-themes
- **Deployment**: gh-pages (GitHub Pages)

## Architecture

### Application Structure

The app uses React Router with a base URL configured for GitHub Pages deployment. The router is wrapped with:
- QueryClientProvider for data fetching
- TooltipProvider for UI tooltips
- Toaster components (both regular and Sonner) for notifications

### Path Aliases

The project uses TypeScript path aliases configured in `components.json`:
- `@/components` → src/components
- `@/lib` → src/lib
- `@/hooks` → src/hooks
- `@/ui` → src/components/ui

### Landing Page Structure

The main Index page (`src/pages/Index.tsx`) is composed of reusable section components rendered in order:
1. HeroSection
2. ProblemSolutionSection
3. FeaturesSection
4. DashboardPreview
5. TestimonialsSection
6. PricingSection
7. FaqSection
8. CtaSection
9. Footer

Each section is a standalone component in `src/components/`.

### UI Components

All UI primitives are in `src/components/ui/` and are based on shadcn-ui. These include:
- Form controls (Input, Select, Checkbox, etc.)
- Layout components (Card, Tabs, Accordion, etc.)
- Feedback components (Toast, Dialog, Alert, etc.)
- Navigation components (Dropdown Menu, Navigation Menu, etc.)

Use the `npx shadcn-ui@latest add [component]` command to add new shadcn components.

### Styling

The project uses a custom gaming/neon theme with extended Tailwind colors:
- Neon colors: `neon-green`, `neon-purple`, `neon-cyan`, `neon-red`, `neon-yellow`
- Custom backgrounds: `bg-primary`, `bg-secondary`, `bg-tertiary`
- Custom text: `text-primary`, `text-secondary`, `text-muted`
- Custom fonts: Orbitron, Inter, JetBrains Mono

CSS variables are defined in `src/index.css` and support dark mode via the `class` strategy.

## Deployment

The project is configured for GitHub Pages deployment with relative paths (`base: './'` in vite.config.ts). The deployment process:
1. Builds the project
2. Copies `index.html` to `404.html` for client-side routing
3. Deploys the `dist` folder to gh-pages branch

## Routing

When adding new routes:
- Add them in `src/App.tsx` ABOVE the catch-all `*` route
- The catch-all route renders the NotFound page
- BrowserRouter uses a basename from `BASE_URL` env variable for GitHub Pages compatibility

## Development Notes

- The dev server runs on `::` (all interfaces) port 8080
- Vite uses SWC for faster React compilation
- The lovable-tagger plugin is only enabled in development mode
- ESLint is configured for React with hooks and refresh plugins