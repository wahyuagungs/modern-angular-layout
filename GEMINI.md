## Project Overview

This is an Angular 20 web application designed for managing tax cases. It provides functionalities for searching, viewing, and managing tax-related cases. The application follows a standard Angular architecture, utilizing standalone components, services, and routing to structure the codebase.

## Technology Stack

*   **Framework:** Angular 20 with standalone components
*   **Language:** TypeScript 5.8
*   **Reactive Programming:** RxJS
*   **Testing:** Karma + Jasmine
*   **Server-Side Rendering:** Express.js
*   **Styling:** CSS

## Building and Running

### Prerequisites

- Node.js and npm (or a compatible package manager)
- Angular CLI

### Installation

To install the project dependencies, run the following command in your terminal:

```bash
npm install
```

### Development Server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` in your browser to view the application. The app will automatically reload if you change any of the source files.

### Building

To build the project for production, run:

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

To execute the unit tests, run:

```bash
npm test
# or
ng test
```

### Server-Side Rendering

To serve the SSR build, run:

```bash
npm run serve:ssr:modern-angular-layout
```

## Architecture Overview

### Project Structure

- **Standalone Components**: All components use the `standalone: true` pattern, no NgModules.
- **File-per-component**: Each component has separate `.ts`, `.html`, `.css`, and `.spec.ts` files.
- **Service-based data**: Mock data is provided through injectable services.

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

- `CasesDataService` provides mock case data through observables.
- `CaseData` interface defines the structure for tax case entities.
- Services use RxJS observables for data flow.
- Navigation between pages uses Angular Router with parameterized routes.

### Styling and Assets

- Global styles in `src/styles.css`
- Component-specific CSS files
- Assets stored in `src/assets/images/` (includes CoreTax logos)
- Prettier configured with Angular HTML parser

### Key Patterns

- Dependency injection using `inject()` function
- Router navigation programmatically using `Router.navigate()`
- `OnInit` lifecycle for data loading
- Template-driven component communication