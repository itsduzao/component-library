# Design Tokens

Este arquivo contém todos os design tokens usados na biblioteca de componentes.

## Estrutura

Os tokens estão organizados em categorias:

### Cores

- **Grays**: `--gray-50` até `--gray-900`
- **Blues**: `--blue-50`, `--blue-100`, `--blue-600`, `--blue-700`, `--blue-800`
- **Reds**: `--red-50`, `--red-100`, `--red-700`, `--red-800`
- **Greens**: `--green-50`, `--green-100`, `--green-700`, `--green-800`
- **Yellows**: `--yellow-50`, `--yellow-100`, `--yellow-700`, `--yellow-800`
- **Indigos**: `--indigo-100`, `--indigo-800`
- **Purples**: `--purple-100`, `--purple-800`
- **Pinks**: `--pink-100`, `--pink-800`

### Tipografia

- **Font Family**: `--font-sans`
- **Font Sizes**: `--text-sm`, `--text-base`, `--text-lg`
- **Font Weights**: `--font-normal`, `--font-medium`, `--font-semibold`
- **Line Heights**: `--leading-tight`, `--leading-snug`, `--leading-normal`, `--leading-relaxed`

### Espaçamento

- `--space-2` (0.5rem / 8px)
- `--space-3` (0.75rem / 12px)
- `--space-4` (1rem / 16px)
- `--space-6` (1.5rem / 24px)
- `--space-8` (2rem / 32px)
- `--space-12` (3rem / 48px)

### Border Radius

- `--radius-sm` (0.25rem / 4px)
- `--radius-md` (0.375rem / 6px)
- `--radius-lg` (0.5rem / 8px)
- `--radius-xl` (0.75rem / 12px)

### Sombras

- `--shadow-md`: Sombra média
- `--shadow-lg`: Sombra grande

### Tokens de Componentes

Cada componente tem seus próprios tokens para facilitar customização:

#### Badge

- `--badge-font-family`
- `--badge-font-size`
- `--badge-font-weight`
- `--badge-line-height`
- `--badge-padding-y`
- `--badge-padding-x`
- `--badge-radius-square`
- `--badge-radius-pill`

#### Banner

- `--banner-font-family`
- `--banner-title-size`
- `--banner-title-weight`
- `--banner-title-line-height`
- `--banner-content-size`
- `--banner-content-weight`
- `--banner-content-line-height`
- `--banner-padding`
- `--banner-gap`
- `--banner-text-gap`
- `--banner-radius`

#### Card

- `--card-bg`
- `--card-font-family`
- `--card-title-size`
- `--card-title-weight`
- `--card-title-color`
- `--card-title-line-height`
- `--card-content-size`
- `--card-content-weight`
- `--card-content-color`
- `--card-content-line-height`
- `--card-gap`
- `--card-padding`
- `--card-radius`
- `--card-icon-size`
- `--card-icon-bg`
- `--card-icon-radius`
- `--card-icon-shadow`

## Uso

### Em CSS

```css
.my-component {
  color: var(--gray-900);
  font-size: var(--text-lg);
  padding: var(--space-4);
  border-radius: var(--radius-md);
}
```

### Em TypeScript/JavaScript

```typescript
import { tokens } from "./styles/tokens";

const styles = {
  color: tokens.colors.gray900,
  fontSize: tokens.fontSizes.lg,
  padding: tokens.spacing[4],
};
```

### Customização Global

```css
:root {
  /* Customizar a fonte de todos os componentes */
  --font-sans: "Roboto", sans-serif;

  /* Customizar apenas o Card */
  --card-font-family: "Poppins", sans-serif;
  --card-title-size: 1.5rem;
  --card-title-weight: 600;
}
```

### Customização com Escopo

```tsx
<div style={{ "--card-font-family": "'Montserrat', sans-serif" }}>
  <Card title="Custom Font" content="Using Montserrat" />
</div>
```

## Exportação TypeScript

Os tokens são exportados com tipos para autocomplete e type safety:

```typescript
import { tokens, type ColorToken } from "./styles/tokens";

// Autocomplete funciona!
const myColor: ColorToken = "gray900";

// TypeScript valida
const validColor = tokens.colors.gray900; // ✅
const invalidColor = tokens.colors.purple; // ❌ Erro de tipo
```

