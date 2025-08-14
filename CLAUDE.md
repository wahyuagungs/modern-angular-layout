# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build and Development
- `npm start` or `ng serve` - Start development server (http://localhost:4200)
- `npm run build` or `ng build` - Build for production
- `npm run watch` or `ng build --watch --configuration development` - Build in watch mode for development

### Testing
- `npm test` or `ng test` - Run unit tests with Karma and Jasmine
- No e2e testing framework is currently configured

### Code Generation
- `ng generate component component-name` - Generate new component
- `ng generate --help` - List available schematics

### Server-Side Rendering
- `npm run serve:ssr:modern-angualr-layout` - Serve SSR build
- SSR is configured with entry point at `src/server.ts`

## Architecture Overview

This is an Angular 20 application using standalone components with a tax case management system theme.

### Project Structure
- **Standalone Components**: All components use the standalone: true pattern, no NgModules
- **File-per-component**: Each component has separate .ts, .html, .css, and .spec.ts files
- **Service-based data**: Mock data is provided through injectable services

### Key Directories
- `src/app/layout/` - Header and footer layout components
- `src/app/pages/` - Page components for different routes (home, all-cases, case details, searches, etc.)
- `src/app/services/` - Data services with mock data for cases

### Routing Structure
- Root redirect: `''` → `'home'`
- Case management: `/all-cases`, `/case-general-information/:id`, `/processing-requests`
- Search pages: `/taxpayer-search`, `/tax-officers-search`
- Wildcard redirect to home for unknown routes

### Data Architecture
- `CasesDataService` provides mock case data through observables
- `CaseData` interface defines the structure for tax case entities
- Services use RxJS observables for data flow
- Navigation between pages uses Angular Router with parameterized routes

### Styling and Assets
- Global styles in `src/styles.css`
- Component-specific CSS files
- Assets stored in `src/assets/images/` (includes CoreTax logos)
- Prettier configured with Angular HTML parser

### Key Patterns
- Dependency injection using `inject()` function
- Router navigation programmatically using `Router.navigate()`
- OnInit lifecycle for data loading
- Template-driven component communication

## Technology Stack
- Angular 20 with standalone components
- TypeScript 5.8
- RxJS for reactive programming
- Karma + Jasmine for testing
- Express.js for SSR server
- Angular SSR with hydration support