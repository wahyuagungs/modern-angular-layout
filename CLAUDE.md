# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm start` or `ng serve` (runs on http://localhost:4200)
- **Build for production**: `npm run build` or `ng build`
- **Build with watch mode**: `npm run watch` (builds with watch flag for development)
- **Run unit tests**: `npm test` or `ng test` (uses Karma + Jasmine)
- **Generate new components**: `ng generate component component-name`
- **Serve SSR build**: `npm run serve:ssr:modern-angualr-layout`

## Project Architecture

This is an Angular 20 standalone application with Server-Side Rendering (SSR) support built for tax case management.

### Application Structure
- **Standalone Components**: All components use Angular's standalone API (no NgModules)
- **File Naming Convention**: Uses modern Angular naming - `.ts`, `.html`, `.css` instead of `.component.ts`, etc.
- **SSR Configuration**: Configured with Angular Universal for server-side rendering

### Key Directories
- `src/app/layout/`: Contains reusable layout components (Header, Footer)
- `src/app/pages/`: Feature pages organized by functionality (home, all-cases, case-general-information, etc.)
- `src/app/services/`: Business logic and data services

### Routing Structure
The application uses Angular Router with the following main routes:
- `/home` - Landing page (default redirect from `/`)
- `/all-cases` - Cases listing with search functionality
- `/case-general-information/:id` - Individual case details
- `/processing-requests` - Request processing management
- `/taxpayer-search` - Taxpayer lookup functionality
- `/tax-officers-search` - Tax officer search
- Wildcard route redirects unknown URLs to home

### Data Architecture
- **CasesDataService**: Provides mock case data with CaseData interface
- **CaseDetailsService**: Handles individual case operations
- Mock data includes tax case management fields: case numbers, taxpayer info, tax types, regions, offices, and workflow states

### Component Architecture
- All components extend Angular's standalone Component decorator
- Layout components (Header/Footer) are imported into the main App component
- Page components handle specific business functionality
- Services use Angular's `providedIn: 'root'` for singleton injection

### Build Configuration
- Uses Angular's new application builder (`@angular/build:application`)
- SSR configured with separate server entry point
- Development build includes source maps and disables optimization
- Production build includes bundle budgets (500kB warning, 1MB error for initial bundle)
- Prettier configured with Angular HTML parser override
