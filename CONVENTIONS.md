# Project Conventions

React + Bun + Mantine UI + TanStack Router + ElysiaJS application following these conventions:

Directory structure under src/:
@api (API), @form (Forms), @lang (i18n), @layout (Layouts), @lib (Utils), @routes (Routes), @view (Views)

File naming:
- Always kebab-case
- Layouts: component-name.layout.tsx
- Forms: component-name.form.tsx
- Views: component-name.view.tsx
- Routes: component-name.lazy.tsx

Code naming:
- Components: PascalCase with prefix based on type:
  - Forms: Form[Name] (FormSignUp)
  - Views: View[Name] (ViewHome)
  - Layouts: App[Name] (AppHeader)
- Functions/Variables: snake_case (handle_submit)
- States: $prefix ($user)
- Setters: $_prefix ($_user)

Exports/Imports:
- Always use default export for components
- Use aliases (@layout/component, @view/component)

Form standards:
- Group related fields
- White input backgrounds
- Use validation messages instead of asterisks for required fields
- Show validation errors below fields
- Bold uppercase buttons
- Consistent spacing
- Use Mantine form validation with Zod schemas

Loading:
- Center aligned
- Consistent messages
- Use AppLoader component

Use rem instead of px