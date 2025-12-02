# 🎨 Component Library

[![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://itsduzao.github.io/component-library/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

> 📚 [Ver Documentação Completa no Storybook](https://itsduzao.github.io/component-library/)

## 📝 Sobre

Uma biblioteca de componentes React moderna, acessível e totalmente testada. Construída com TypeScript, design tokens e boas práticas de desenvolvimento.

## ⚡ Características

- 🎯 **Componentes Reutilizáveis**: Badge, Banner, Card e Testimonial
- ♿ **Acessibilidade**: Suporte completo a ARIA labels e navegação por teclado
- 🎨 **Design Tokens**: Sistema de design consistente e customizável
- 📱 **Responsivo**: Componentes adaptáveis para desktop e mobile
- 🧪 **100% Testado**: Cobertura completa com Vitest e Testing Library
- 📖 **Documentação Interativa**: Storybook com exemplos ao vivo
- 🔧 **TypeScript**: Tipagem forte para melhor experiência de desenvolvimento
- 🚀 **Performance**: Otimizado com Vite

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Linguagem tipada
- **Vite** - Build tool e dev server
- **Vitest** - Framework de testes
- **Storybook** - Documentação interativa
- **CSS Custom Properties** - Design tokens e temas
- **ESLint** - Linter de código
- **Testing Library** - Testes de componentes

## 📦 Componentes

### Badge

Etiquetas compactas para categorização e status.

- ✅ Múltiplas cores (gray, red, yellow, green, blue, indigo, purple, pink)
- ✅ Formatos pill e square
- ✅ Suporte a ícones customizados

### Banner

Mensagens de alerta e notificações.

- ✅ 4 tipos (info, success, warning, error)
- ✅ Ícones contextuais automáticos
- ✅ Dismissible com botão de fechar

### Card

Cards informativos com ícone e conteúdo.

- ✅ Ícone customizável (SVG ou componente)
- ✅ Posicionamento do ícone na borda superior
- ✅ Suporte a títulos e conteúdo longo

### Testimonial

Depoimentos de clientes/usuários.

- ✅ Logo customizável (URL ou SVG)
- ✅ Layout responsivo (vertical mobile, horizontal desktop)
- ✅ Formatação automática de aspas

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/itsduzao/component-library.git

# Entre no diretório
cd component-library

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Rodar Storybook localmente
npm run storybook
# Acesse http://localhost:6006

# Rodar testes
npm test

# Rodar testes em modo watch
npm run test -- --watch

# Rodar aplicação de desenvolvimento
npm run dev

# Build da biblioteca
npm run build
```

### Uso dos Componentes

```tsx
import { Badge, Banner, Card, Testimonial } from './components';

// Badge
<Badge color="blue">New</Badge>

// Banner
<Banner
  status="success"
  title="Success!"
  onClose={() => console.log('closed')}
>
  Your changes have been saved.
</Banner>

// Card
<Card
  title="Easy Deployment"
  content="Deploy your application with just one click."
/>

// Testimonial
<Testimonial
  logo="/path/to/logo.svg"
  quote="This product has transformed our workflow!"
  author="Jane Doe"
  role="CEO at Company"
/>
```

## 🎨 Design Tokens

O projeto utiliza CSS Custom Properties para um sistema de design consistente:

- **Cores**: Paleta completa de gray, blue, red, green, yellow, indigo, purple, pink
- **Tipografia**: Tamanhos, pesos e alturas de linha padronizados
- **Espaçamento**: Sistema de espaçamento de 0.25rem a 6rem
- **Sombras**: 7 níveis de sombras
- **Raio**: Bordas arredondadas do sm ao full

## 🧪 Testes

Todos os componentes possuem cobertura de testes incluindo:

- ✅ Renderização básica
- ✅ Props e variações
- ✅ Acessibilidade (ARIA)
- ✅ Estrutura DOM
- ✅ Interações do usuário
- ✅ Estados e comportamentos

```bash
# Rodar todos os testes
npm test

# Rodar testes com cobertura
npm run test -- --coverage

# Rodar testes de um componente específico
npm test -- Badge.test.tsx
```

## 📖 Documentação

A documentação completa com exemplos interativos está disponível no [Storybook](https://itsduzao.github.io/component-library/).

Cada componente possui:

- 📝 Documentação de props com tipos
- 🎨 Variações visuais e casos de uso
- ♿ Notas de acessibilidade
- 💻 Código de exemplo

