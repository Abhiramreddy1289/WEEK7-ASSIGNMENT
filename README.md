# Week 7 Assignment: React Project Portfolio

Welcome to the Week 7 Assignment submission. This repository showcases a collection of React applications built with **Vite**, focusing on component architecture, state management, API integration, and responsive design.

## 🚀 Overview for Evaluators

This portfolio demonstrates proficiency in modern frontend development practices, specifically within the React ecosystem. Each project is designed to be modular, performant, and user-friendly.

### Key Technical Competencies
- **Component-Based Architecture**: Reusable UI components across different application scopes.
- **API Integration**: Real-time data fetching and handling (REST Countries API).
- **State Management**: Effective use of React Hooks (`useState`, `useEffect`) for application logic.
- **Modern Styling**: Implementation of responsive layouts using **Tailwind CSS** and custom CSS.
- **Tooling**: High-performance development and bundling using **Vite**.

---

## 📂 Project Portfolio

### 1. Country Explorer
A sophisticated data-driven application for discovering global information.
- **Highlights**: Fetching real-time data from an external REST API, search/filtering logic, and interactive UI cards.
- **Tech**: React, Vite, Tailwind CSS, REST Countries API.
- **Location**: `/country-explorer`

### 2. Products Page
A clean, professional e-commerce style landing page.
- **Highlights**: Focus on layout design, component decomposition (Product/Products list), and responsive grid systems.
- **Tech**: React, Vite, CSS3.
- **Location**: `/products-page`

### 3. Task Manager App
A functional CRUD-style productivity tool.
- **Highlights**: Form handling, list management, and state lifting to manage task lifecycle.
- **Tech**: React, Vite, Tailwind CSS.
- **Location**: `/task-manager-app`

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation & Execution
To run any project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd week7-assignment
   ```

2. **Navigate to the desired project folder**:
   ```bash
   cd country-explorer # or products-page, or task-manager-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open the URL provided in the terminal (usually `http://localhost:5173`).

---

## 🧐 Evaluator's Checklist

| Feature | Country Explorer | Products Page | Task Manager |
| :--- | :---: | :---: | :---: |
| **Component Reusability** | ✅ | ✅ | ✅ |
| **Responsive Design** | ✅ | ✅ | ✅ |
| **State Management** | ✅ | N/A | ✅ |
| **External API Data** | ✅ | N/A | N/A |
| **Search/Filter Logic** | ✅ | N/A | N/A |
| **CRUD Operations** | N/A | N/A | ✅ |

### Design Considerations
- **Modularity**: Components are separated into logical files (e.g., `SearchBar.jsx`, `AddTaskForm.jsx`).
- **Performance**: Leveraging Vite's HMR for rapid development and optimized builds.
- **User Experience**: Focus on intuitive interfaces, consistent styling (Tailwind CSS/Vanilla CSS), and responsive layouts.
- **Code Quality**: Use of functional components, React Hooks, and clean prop drilling/lifting state patterns.

---

*Thank you for reviewing this assignment!*
