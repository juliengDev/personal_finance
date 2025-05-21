# Personal Finance App

![Full-Stack Personal Finance Application](./preview.png)

<img src="https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20TailwindCSS-000?logo=next.js&logoColor=white&labelColor=000000&color=007ACC" alt="Tech Stack" width="250" />

## Overview

A comprehensive full-stack personal finance application built with **Next.js 15**, TypeScript, TailwindCSS, and Prisma ORM over PostgreSQL, enabling users to track budgets, manage saving pots, record transactions, and monitor recurring bills in a centralized dashboard.

💰 **Key Features:**

- **Dynamic Dashboard:** Overview of financial health with at-a-glance metrics
- **Transaction Management:** Complete transaction tracking with advanced filters
- **Budget System:** Create and monitor budget targets with progress visualization
- **Saving Pots:** Track progress toward financial goals with deposit/withdrawal
- **Recurring Bills:** Monitor monthly obligations with status tracking
- **User Authentication:** Secure account system with OAuth and credentials
- **Fully Responsive:** Optimized experience across all devices

---

## ✨ Features

- **Overview Dashboard:**

  - Snapshot view of financial status
  - Quick access to budgets, saving pots, and recent transactions
  - Performance metrics and spending patterns

- **Transaction Management:**

  - Complete CRUD operations for transaction categories
  - Comprehensive transaction listing with pagination (10 per page)
  - Advanced filtering with debounced search functionality
  - Multi-parameter sorting (date, amount, alphabetical)
  - Category-based filtering
  - Custom avatar upload for transactions (PNG/JPEG via Cloudinary)

- **Budget Tracking:**

  - Complete CRUD operations for budgets categories
  - Visual progress tracking with dynamic progress bars
  - Live preview of changes during editing

- **Saving Pots:**

  - Complete CRUD operations for pots categories
  - Goal-oriented savings tracking
  - Deposit and withdrawal operations
  - Live preview of changes during editing
  - Progress visualization toward saving targets
  - Full history of pot activities

- **Recurring Bills:**

  - Monthly bill tracking with due date monitoring
  - Status indicators (paid/due/upcoming)
  - Search and sort capabilities
  - Summary statistics unaffected by filter selections

- **Authentication & Security:**

  - Multi-provider authentication via Auth.js
  - OAuth2 social login options
  - Credential-based authentication with secure password handling
  - Protected routes and data isolation between users

---

## 🛠 Built With

- **Next.js 15** - Full-stack React framework with App Router
- **TypeScript** - Static typing for improved code quality
- **Auth.js** - Authentication with multiple providers
- **Prisma** - Type-safe ORM for database operations
- **PostgreSQL (NeonDB)** - Cloud-hosted database
- **TailwindCSS** - Utility-first CSS framework
- **ShadCn/UI** - High-quality component library
- **React Hook Form** - Form validation and handling
- **Zod** - Schema validation
- **Recharts** - Data visualization components
- **Cloudinary** - Image storage and optimization
- **bcryptjs** - Password encryption
- **react-hot-toast** - Toast notifications
- **lucide-react** - Modern icon set
- **UUID** - Unique identifier generation

---

## 🧠 Advanced Patterns

This project implements several advanced Next.js and React patterns:

- **Server Components** - Optimized rendering with React Server Components
- **React Compound Component** - Used to build a complex, flexible modal with a form.
- **Server Actions** - Form handling with direct server communication
- **Type Safety** - End-to-end type safety with TypeScript and Prisma
- **Progressive Enhancement** - Graceful fallback for JavaScript-disabled environments
- **Optimistic UI Updates** - Immediate feedback before server confirmation
- **Custom Hooks** - Reusable stateful logic

---

## 📈 Next.js Features Utilized

- **App Router** - Modern file-based routing system
- **Server Components** - Reduced client-side JavaScript
- **Server Actions** - Form submissions without API endpoints
- **TypeScript Integration** - Enhanced developer experience
- **Image Optimization** - Automatic image processing and delivery
- **Edge Runtime** - Fast, global performance
- **API Routes** - Backend functionality when needed

---

## 🚀 Live Demo

🔗 [Personal Finance App](https://personal-finance-xi-umber.vercel.app/)

Test credentials:

- Email: johndoe@finance.org
- Password: pass1234

---

## 📦 Installation

Get started with these simple steps:

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd personal-finance-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file with your credentials:

   ```
   # Database
   DATABASE_URL="postgresql://username:password@hostname:port/database"

   # Auth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-nextauth-secret"

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**

   ```bash
   npx prisma db push
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Build for production**

   ```bash
   npm run build
   ```

---

## 🧪 Testing

Run the test suite with:

```bash
npm test
```

The project uses Jest for unit and integration testing.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

- 🌐 **Portfolio** - [Julien Gilbert](https://juliengilbert.com/)
- 🏆 **GitHub** - [@juliengDev](https://github.com/juliengDev)
- 💼 **LinkedIn** - [Julien Gilbert](https://www.linkedin.com/in/julien-gilbert-reactjs/)

---

🎯 _Feel free to reach out if you have any questions or suggestions!_ 🚀
