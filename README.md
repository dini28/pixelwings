# PixelWings

**Technical partnership for high-scale digital production.**

PixelWings moves beyond traditional agency models by operating as your dedicated technical partner. We focus on code quality, architectural integrity, and business intelligence to deploy production-grade systems that scale.

## ⚡ Tech Stack

Built with a performance-first modern web stack:

-   **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **UI Primitives**: [Radix UI](https://www.radix-ui.com/)

## 🚀 Key Features

-   **Modular Architecture**: Component-based design with strict separation of concerns (`/UI`, `/layout`, `/common`).
-   **Standardized UI Patterns**: Unified `SectionHeader` with built-in intersection observer animations.
-   **Responsive Design**: Fully responsive layouts optimized for all device sizes.
-   **Modern Styling**: Utility-first CSS using Tailwind v4 for rapid and consistent UI development.

## 🛠️ Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── common/       # Reusable atoms (Buttons, SectionHeaders)
│   ├── layout/       # Global layout (Header, Footer)
│   ├── pages/        # Page-level components
│   └── UI/           # Feature-specific sections (WhyChooseUs, Features)
├── utils/            # Shared utilities (cn helper)
└── main.tsx          # Application entry point
```

---

*© pixelwings. All rights reserved.*
