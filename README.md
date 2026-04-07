# React + TypeScript + Vite

## Project Architecture

The project follows a modular structure under `src/`:

### Core (`core/`)

Global core functionality used across the entire application:

- `auth/` - Authentication and authorization logic
- `form/` - Abstract form components and utilities (e.g., FormField)
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
- Pages may have a `forms/` subfolder for page-specific form components
  - Each form can contain its own `schemas/`, `types/`, and `constants/` subfolders
- Pages may have an `api/` subfolder for page-specific API logic
  - `api/mutations/` contains mutation functions for data modifications
- Pages may also have a `components/` subfolder for other page-specific components

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
  ├── components/            # Sub-components specific to this unit
  │   └── SubComponent.tsx
  ├── api/                   # API layer (for pages only)
  │   └── mutations/         # Mutation functions
  │       └── page-name.mutation.ts
  └── forms/                 # Form components (for pages only)
      └── form-name/
          ├── FormName.tsx
          ├── schemas/       # Validation schemas
          │   └── form-name.schema.ts
          ├── types/         # Form-specific types
          │   └── form-name.types.ts
          └── constants/     # Form-specific constants
              └── form-name.constants.ts
```

**Example UI Component:**

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

**Example Page with Forms and API:**

```
modules/login/pages/login/
  ├── Login.tsx
  ├── forms/
  │   └── login-form/
  │       ├── LoginForm.tsx
  │       ├── schemas/
  │       │   └── login-form.schema.ts
  │       ├── types/
  │       │   └── login-form.types.ts
  │       └── constants/
  │           └── login-form.constants.ts
  └── api/
      └── mutations/
          └── login.mutation.ts
```
