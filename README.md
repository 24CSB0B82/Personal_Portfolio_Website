# Sai Jaswanth Vankadara - Personal Portfolio Manager

An interactive, multi-page personal portfolio website built with **React.js**, **Vite**, **React Router DOM**, and custom CSS. Designed with an editorial black-and-white theme featuring fixed dark sidebar navigation, smooth route transitions, dark/light theme switching, and soft pastel gradient accents.

---

## 💻 Setup & Run Instructions

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### 1. Installation
Clone the repository and install all required dependencies (excluding `node_modules`):
```bash
git clone https://github.com/saijaswanthvankadara/personal-portfolio-manager.git
cd personal-portfolio-manager
npm install
```

### 2. Run Local Development Server
Start the Vite development server:
```bash
npm run dev
```
Open your browser at the URL shown in terminal (e.g., `http://localhost:5173`).

### 3. Production Build & Preview
Compile the production bundle and preview it locally:
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌳 Component Tree & State-Lifting Decisions

```
App (Root Component - holds theme state & top-level layout)
├── Sidebar (Navigation links, SJ logo, white-bordered social icons, theme toggle button)
├── Main Content Wrapper
│   ├── Routes (React Router DOM Client-Side Router)
│   │   ├── HomePage
│   │   │   └── ProjectGrid (Renders vertical stacked project cards)
│   │   │       └── ProjectCard (Independent card highlight toggle state)
│   │   ├── AboutPage (Biography, metric stats, experience banner)
│   │   ├── SkillsPage (Categorized technical skill cards)
│   │   ├── ProjectsPage (All projects grid view)
│   │   │   └── ProjectGrid
│   │   │       └── ProjectCard
│   │   ├── ProjectDetailPage (Dynamic route /projects/:projectId using useParams())
│   │   ├── ContactPage
│   │   │   └── ContactForm (Controlled form inputs, validation state, success banner)
│   │   └── NotFoundPage (Catch-all 404 route for invalid URLs)
│   └── Footer (Back-to-top action button & copyright details)
```

### State-Lifting & Component Architecture Decisions

1. **Theme State (`theme`) Lifted to `App.jsx`**:
   - **Decision**: The `theme` state (`'light'` / `'dark'`) and `toggleTheme` handler are declared at the top-level `App` component.
   - **Rationale**: Lifting theme state to `App` allows the `Sidebar` component to trigger theme changes while `App` applies the active `data-theme` attribute to the root document tree, updating colors globally across all pages seamlessly.

2. **Prop-Drilling Project Data (`HomePage` / `ProjectsPage` → `ProjectGrid` → `ProjectCard`)**:
   - **Decision**: Centralized project definitions are stored in `src/data/projects.js`. Page components import `projectsData` and pass it down to `ProjectGrid`, which iterates over the array to pass individual `project` objects to `ProjectCard`.
   - **Rationale**: Demonstrates multi-level prop drilling while keeping component responsibilities clear: pages handle routing layout, grids handle mapping/layout structure, and cards handle individual presentation.

3. **Card-Scoped Independent State (`ProjectCard.jsx`)**:
   - **Decision**: The `showDetails` boolean state is managed locally inside each `ProjectCard` instance.
   - **Rationale**: Allows users to toggle "Key Highlights" on one project card without affecting the expanded/collapsed state of other project cards.

4. **Controlled Form State (`ContactForm.jsx`)**:
   - **Decision**: All input fields (`name`, `email`, `subject`, `message`) are controlled using React `useState` inside `ContactForm.jsx`.
   - **Rationale**: Enables real-time input validation, custom error messaging on blur, disabling the submit button until valid, and resetting the form state upon submission.

---

## ⚡ Implemented `useEffect` Hooks & Necessity

| Location | `useEffect` Hook Implementation | Why Necessary & Purpose |
| :--- | :--- | :--- |
| **`App.jsx`** | `useEffect(() => { localStorage.setItem('portfolio_theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);` | **Theme Persistence & Global DOM Styling**: Necessary to persist user theme preferences across browser reloads via `localStorage` and dynamically update the root `data-theme` attribute for global CSS variable switching. |
| **`HomePage.jsx`** | `useEffect(() => { const timer = setTimeout(() => setLoading(false), 1000); return () => clearTimeout(timer); }, []);` | **Async Loading Simulation & Cleanup**: Necessary to simulate initial asynchronous content rendering with a loading spinner while demonstrating proper side-effect cleanup via `clearTimeout` to prevent memory leaks if unmounted early. |

---

## 👤 Author & Repository Details

**Sai Jaswanth Vankadara**
- **Institution**: National Institute of Technology, Warangal (NIT Warangal)
- **Department**: B.Tech in Computer Science and Engineering (Roll No: `24CSB0B82`)
- **Email**: `saijaswanthvankadara1901@gmail.com`
- **Student Email**: `vs24csb0b82@student.nitw.ac.in`
- **GitHub**: [@saijaswanthvankadara](https://github.com/saijaswanthvankadara)
