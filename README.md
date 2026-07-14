# Online Book Borrowing Platform

A seamless and modern web application designed to digitize the traditional library experience. This platform allows users to explore a vast collection of books, filter them by categories, and borrow titles digitally with ease.[cite: 1]

## 📖 Project Description
The Online Book Borrowing Platform, currently live at book-borrow-zeta.vercel.app, is a high-performance web solution engineered to transition physical library systems into the digital era. Built on the modern Next.js framework, the platform offers an intuitive interface where readers can search a dynamic book catalog, use granular category filtering (Story, Tech, Science), and manage their reading interests seamlessly.

Security and personalization are at the core of the application. Integrating BetterAuth for robust credential and Google social logins, the platform ensures protected private routes for single book details and individual profile updates. Combining smooth animations with a clutter-free UI, it provides a premium, responsive digital hub for book enthusiasts on any device.

## 🌐 Live URL
[Book Borrow Platform](https://book-borrow-zeta.vercel.app/)
<img width="1919" height="946" alt="Screenshot 2026-07-13 215140" src="https://github.com/user-attachments/assets/1c58b8e7-1190-4107-92bc-9eed117518c2" />
<img width="1919" height="944" alt="Screenshot 2026-07-13 215152" src="https://github.com/user-attachments/assets/6ae890c6-ed3b-474e-9262-494ee8fe932a" />


## 📖 Purpose
The primary goal of this project is to provide a user-friendly digital interface for library management. It enables users to browse, search, and manage their reading interests while ensuring a secure and high-performance experience.[cite: 1]

## ✨ Key Features
- **Modern Authentication:** Secure user login and registration powered by **BetterAuth**, including Google Social Login support.[cite: 1]
- **Dynamic Book Catalog:** A comprehensive "All Books" page featuring a search bar to find books by title.[cite: 1]
- **Category Filtering:** A functional sidebar to filter books by categories like Story, Tech, and Science.[cite: 1]
- **Interactive Home Page:**
  - Dynamic Banner with "Browse Now" functionality.[cite: 1]
  - Marquee showing new arrivals and special discounts.[cite: 1]
  - Featured Books section showcasing top titles.[cite: 1]
- **Private Routes:** Secured access to "Single Book Details" and "My Profile" pages, available only for logged-in users.[cite: 1]
- **Profile Management:** Users can view their information and update their name and profile image.[cite: 1]
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.[cite: 1]

## 🛠️ Tech Stack
- **Framework:** Next.js[cite: 1]
- **Styling:** Tailwind CSS & DaisyUI/HeroUI[cite: 1]
- **Authentication:** BetterAuth[cite: 1]
- **Database:** MongoDB

## 📦 NPM Packages Used
The following key packages were used in this project:
- `better-auth` (for secure authentication)[cite: 1]
- `next` (React framework for production)[cite: 1]
- `lucide-react` / `react-icons` (for iconography)
- `framer-motion` / `animate.css` (for smooth animations)[cite: 1]
- `react-toastify` / `hot-toast` (for notifications)[cite: 1]
- `mongodb` / `mongoose` (for database management)

## 🚀 How to Run Locally
1. Clone the repository: `git clone <your-repo-link>`
2. Install dependencies: `npm install`
3. Set up environment variables (.env):
   - Database credentials
   - BetterAuth secret keys
   - Google Client ID & Secret
4. Start the development server: `npm run dev`
