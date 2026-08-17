# Sai Jaswanth Vankadara - Personal Portfolio Manager

An interactive, multi-page personal portfolio website built with **React.js**, **Vite**, **React Router DOM**, and custom CSS. Designed with an editorial black-and-white theme featuring fixed dark sidebar navigation, smooth route transitions, dark/light theme switching, and soft pastel gradient accents.

---

## 🚀 Features

- **Fixed Dark Sidebar Navigation**: Fixed left-side navigation with geometric side-by-side **SJ** monogram logo badge, FontAwesome classic-solid icons, active link strikethrough effect with increasing opacity gradient, and stylish white-bordered social links.
- **Multi-Page Client-Side Routing**:
  - ` / ` : **Home Page** with high-impact typography, profile image art frame, quick contact badges, and stacked vertical recent project showcase.
  - `/about` : **About Page** featuring profile summary card, metric stats callouts (CGPA, JEE Advanced rank, CP problems), and an experience/education timeline banner.
  - `/skills` : **Technical Skills** categorized into languages, frameworks, databases, tools, and coursework.
  - `/projects` : **Works Page** displaying full project grid with key highlights toggles and external GitHub repository links.
  - `/projects/:projectId` : **Dynamic Project Details Page** retrieving specific project metrics and architecture specifications using `useParams()`.
  - `/contact` : **Contact Page** featuring a controlled contact form housed inside a soft pastel gradient card with real-time field validation.
  - ` * ` : **404 Catch-All Page** handling invalid routes cleanly.
- **Theme Switcher**: Dark/Light mode toggle with preference persistence in `localStorage`.
- **Page Transitions**: Smooth physics-based page fade-in and slide-up route transitions.

---

## 🛠️ Tech Stack

- **Frontend Library**: React.js (v18+)
- **Build Tool**: Vite (v5+)
- **Routing**: React Router DOM (v7+)
- **Icons**: FontAwesome Classic Solid & Brands
- **Styling**: Vanilla CSS3 (Custom Design System with CSS Variables)

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saijaswanthvankadara/personal-portfolio-manager.git
   cd personal-portfolio-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

---

## 👤 Author

**Sai Jaswanth Vankadara**
- B.Tech Computer Science & Engineering @ **National Institute of Technology, Warangal**
- Email: `saijaswanthvankadara1901@gmail.com`
- Student Email: `vs24csb0b82@student.nitw.ac.in`
- GitHub: [@saijaswanthvankadara](https://github.com/saijaswanthvankadara)
