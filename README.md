# PixelWings

<div align="center">

  [![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

  <h3 align="center">High-Performance Frontend Technical Showcase</h3>
</div>

<br />

## 💡 About The Project

**PixelWings** is a portfolio piece designed to demonstrate advanced frontend development skills, architectural patterns, and the implementation of a modern, performance-first tech stack. 

Unlike a standard agency site, this project serves as a **technical playground** to showcase:
*   **Next-Gen CSS**: Early adoption and implementation of **Tailwind CSS v4**.
*   **Modern React Patterns**: Utilizing **React 19** features and hooks for state management and side effects.
*   **Component Architecture**: A strict atomic design system separating atomic UI primitives from complex business logic components.
*   **Performance Optimization**: Zero-runtime CSS extraction, optimized asset loading, and code splitting via Vite.

<br />

<img src="public/preview.png" alt="PixelWings Preview" width="100%" />

<br />
---

## 🏗️ Technical Highlights

### Cutting-Edge Stack
Built on the "bleeding edge" to demonstrate readiness for the next generation of web tools:
*   **React 19**: Leveraging the latest concurrent features.
*   **Tailwind v4**: Using the new high-performance engine for instant HMR.
*   **TypeScript**: Strict type safety enabled for robust and maintainable code.

### Modular Architecture
The codebase follows a strict separation of concerns:
*   `src/components/UI`: Feature-specific organisms (e.g., `HeroServices`, `Features`).
*   `src/components/common`: Reusable atoms and molecules (e.g., `Button`, `SectionHeader`).
*   `src/components/layout`: Global structural components.

### Design System
*   **Consistent Theming**: Centralized design tokens for colors, typography, and spacing.
*   **Responsive**: Mobile-first approach ensuring perfect rendering on all viewports.
*   **Accessible**: utilizing `Radix UI` primitives for accessible interactive components.

---

## 🚀 Key Features

*   **Dynamic Hero Sections**: Visually striking entry points (`HeroHome`, `HeroServices`) with optimized image loading.
*   **Interactive UI Elements**:
    *   `ServicesCard`: Complex hover states and content projection.
    *   `Story`: Narrative layout with scroll-triggered animations.
    *   `LocationGrid`: Responsive grid layouts for data visualization.
*   **Global Components**:
    *   `SectionHeader`: Unified header component with built-in intersection observer animations.
    *   `Footer`: Modular 4-column layout with newsletter integration.

---

## 🛠️ Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/dini28/pixelwings.git
    cd pixelwings
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

---

## 📂 Project Structure

A look at the organized file structure designed for scalability:

```bash
src/
├── components/
│   ├── common/       # Atoms: Buttons, Inputs, SectionHeaders
│   ├── layout/       # Layout: Header, Footer, navigation
│   ├── pages/        # Views: Route-level components
│   └── UI/           # Organisms: Complex feature sections
│       ├── Features.tsx
│       ├── HeroHome.tsx
│       ├── Pricing.tsx
│       └── ...
├── utils/            # Helpers: cn(), formatters
├── assets/           # Static: Images, SVGs
└── main.tsx          # Entry: React DOM rendering
```

---

## 👤 Author

**Dini28**
*   **Focus**: High-Scale Digital Production & Technical Architecture
*   **Specialty**: React, TypeScript, Performance Engineering

---

*This project is for demonstration purposes.*

## 🤝 Contributing

If you like this project and have some suggestions, feel free to **fork** the repository and submit a pull request. Feedback is always welcome!
