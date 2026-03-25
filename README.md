# React + TypeScript + Vite

## Project Architecture

The project follows a modular structure under `src/`:

### Core (`core/`)

Global core functionality used across the entire application:

- `auth/` - Authentication and authorization logic
- Other app-wide utilities and configurations

### Modules (`modules/`)

Logical feature modules, each containing:

- `admin/` - Admin feature module
  - `layouts/` - Admin-specific layouts
  - `pages/` - Admin page components
- `login/` - Login feature module
  - `layouts/` - Login-specific layouts
  - `pages/` - Login page components

**Module Structure:**

- Each module may contain its own `layouts/` and `pages/` directories
- Layouts may have a `components/` subfolder for layout-specific components (header, footer, sidebar, etc.)
- Pages contain different page components

### UI (`ui/`)

Shared UI components library:

- `components/` - Reusable components (button, input, label, toast, etc.)

### Component Structure

Each unit (component, layout, page, etc.) may contain the following subfolders:

```
component-name/
  ├── ComponentName.tsx       # Main component file
  ├── constants/             # Constants and configuration values
  │   └── component-name.constants.ts
  ├── enums/                 # Enumeration types
  │   └── component-name.enums.ts
  ├── types/                 # TypeScript type definitions
  │   └── component-name.types.ts
  └── components/            # Sub-components specific to this unit
      └── SubComponent.tsx
```

**Example:**

```
ui/components/button/
  ├── Button.tsx
  ├── constants/
  │   └── button.constants.ts
  ├── enums/
  │   └── button.enums.ts
  ├── types/
  │   └── button.types.ts
  └── components/
      └── ButtonIcon.tsx
```
