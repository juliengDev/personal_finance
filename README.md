# Personal Finance App

<img src="https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20TailwindCSS-000?logo=next.js&logoColor=white&labelColor=000000&color=007ACC" alt="Tech Stack" width="250" />

A full-stack Personal Finance application built with Next.js 15 (App Router), TypeScript, TailwindCSS, and Prisma ORM over PostgreSQL (NeonDB), featuring budgets, saving pots, transactions, and recurring bills management.

---

## 🔗 Live Demo

[https://your-app-domain.com](https://personal-finance-xi-umber.vercel.app/)

Test user already filled to try all functionnalities:
mail: johndoe@finance.org
password: pass1234

---

## 🚀 Overview

This project started as a [Frontend Mentor](https://www.frontendmentor.io/) challenge to build a finance dashboard. It has since evolved into a full-stack application with user authentication (Clerk), a PostgreSQL database hosted on NeonDB, and server actions for all CRUD operations.

Users can:

- View an **Overview** dashboard with budgets, pots, and latest transactions at-a-glance
- Browse **Transactions** with pagination, search, sort, and category filters
- Manage **Budgets** and **Saving Pots** with full CRUD operations
- **Add**, **withdraw**, and track progress toward each pot
- Track **Recurring Bills** each month, search and sort them
- Upload a custom **avatar** per transaction
- Perform all actions via **keyboard** only, with proper focus and hover states

---

## ⚙️ Key Features

### Transactions

- Pagination (10 per page)
- Search by name (debounced)
- Sort (date, amount, A–Z)
- Category filter
- Custom avatar upload (PNG/JPEG)

### Budgets & Pots

- Create, read, update, delete budgets and pots
- Add / withdraw money from pots
- Progress bars with live preview
- Validation messages on required fields

### Recurring Bills

- List all recurring bills for the current month
- Search & sort by due date, name, or amount
- Status icons for paid / due / upcoming
- Summary and total unaffected by search filter

### Authentication & Data

- User accounts via Auth.js (OAuth2 and credentials)
- PostgreSQL database via NeonDB
- ORM: Prisma, with type-safe queries
- Server Actions for form submissions

---

## 📦 Technology Stack

| Frontend                | Backend                  | Database            | UI Library       | Testing |
| ----------------------- | ------------------------ | ------------------- | ---------------- | ------- |
| Next.js 15 (App Router) | Node.js (server actions) | PostgreSQL (NeonDB) | TailwindCSS      | Jest    |
| TypeScript              | Prisma ORM               |                     | shadcn/ui        |         |
| React                   | Clerk Auth               |                     | Radix Primitives |         |
