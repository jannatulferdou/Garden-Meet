# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# 🌱 GardenMeet

**Live URL:** [https://gardening-7dc41.web.app/](https://gardening-7dc41.web.app/)

GardenMeet is a web-based platform designed to connect gardening enthusiasts with experienced gardeners, share knowledge, and promote eco-friendly practices. Whether you're a beginner plant lover or an experienced horticulturist, GardenMeet fosters a collaborative environment where users can grow their gardening knowledge, track their contributions, and connect with others who share their green passion.

---



## 🌟 Key Features

- 🧑‍🌾 **Explore Gardeners** – Browse and discover different gardeners, learn about their expertise, and get connected for personalized tips.
- 💡 **Share Gardening Tips (Private Route)** – Authenticated users can share gardening tips with details like plant type, difficulty, and availability.
- 📚 **Browse Tips** – View a variety of gardening tips posted by others, categorized and filterable for easy access.
- 🗂️ **My Tips Dashboard** – Logged-in users can manage, edit, or delete their submitted tips.
- 📅 **My Bookings** – Book appointments with gardeners and manage scheduled bookings.
- 🔐 **Auth System with Private Routes** – Secure login/register system using Firebase Auth.
- 📱 **Responsive & Mobile-Friendly Design** – Optimized for different devices using Tailwind CSS.
- 🎨 **Polished UI/UX** – Clean modern interface with hover effects, toast notifications, and interactive elements.

---

## 🛠️ Technologies Used

- **Frontend:** React, Tailwind CSS, DaisyUI, Framer Motion, Swiper
- **Backend/Services:** Firebase Authentication, Firebase Hosting
- **State & API:** Axios
- **Animations & Icons:** Lottie React, Lucide React, React Icons, React Simple Typewriter
- **Notifications & Alerts:** React Toastify, SweetAlert2

---

## 📦 Dependencies

```json
"@tailwindcss/vite": "^4.1.7",
"axios": "^1.9.0",
"daisyui": "^5.0.36",
"firebase": "^11.8.1",
"framer-motion": "^12.12.2",
"lottie-react": "^2.4.1",
"lucide-react": "^0.511.0",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-icons": "^5.5.0",
"react-router": "^7.6.0",
"react-router-dom": "^7.6.0",
"react-simple-typewriter": "^5.0.1",
"react-toastify": "^11.0.5",
"sweetalert2": "^11.21.2",
"swiper": "^11.2.7",
"tailwindcss": "^4.1.7",
"use-local-storage": "^3.0.0"
