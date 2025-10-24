# 🧭 Fx Instructional Website

An interactive, educational website designed to guide **new Forex broker clients** through every step of the onboarding and trading process — from registration and verification to deposit, withdrawal, MT5 setup, and placing trades.

The goal of this project is to **simplify user onboarding** for new traders by combining **visual tutorials, embedded videos, and step-by-step guides** into one smooth learning flow.

---

## 🚀 Features

### 🧩 Core Tutorials
- **Account Registration & Verification** – visual guide with screenshots and video.
- **Deposit Guide** – step-by-step funding process with supported payment methods.
- **Withdrawal Guide** – how to safely withdraw profits.
- **MT5 Login Guide** – connect on both desktop and mobile.
- **How to Trade** – learn order placement, TP/SL setup, and basic risk management.

### ⚙️ Interactive Components
- Image zoom and lightbox for detailed screenshots.  
- Embedded video tutorials on each page.  
- Floating action buttons (Register, Download MT5, Live Chat).  
- Progress tracking across tutorials (using Firebase).  
- Responsive layout for mobile and desktop.  
- Searchable FAQ section and integrated support contact form.

---

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | [Vite](https://vitejs.dev/) + JavaScript (React style components) |
| **Styling** | TailwindCSS |
| **Backend** | Node.js + Firebase Cloud Functions |
| **Database** | Firebase Firestore |
| **Auth / Hosting** | Firebase Authentication + Firebase Hosting |
| **Media Storage** | Firebase Storage |
| **Version Control** | Git + GitHub |
| **Deployment** | Firebase Hosting / Vercel (optional) |

---

## 📁 Project Structure

```bash
📦 forex-broker-instructional-site
├── 📂 public                # Static assets (images, icons, etc.)
├── 📂 src
│   ├── 📂 components        # Reusable UI components (Navbar, Footer, etc.)
│   ├── 📂 pages             # Each major page (Home, Register, Deposit, etc.)
│   ├── 📂 assets            # Images, videos, and tutorials
│   ├── 📂 context           # Firebase + App context providers
│   ├── 📂 hooks             # Custom React hooks
│   ├── App.jsx              # Main app entry
│   ├── main.jsx             # Vite entry point
│   └── theme.css            # Tailwind + base styles
├── 📂 functions             # Firebase Cloud Functions
├── .env.example             # Environment variables template
├── firebase.json            # Firebase configuration
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
