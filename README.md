# GOH Accounting System

A customizable, modern school accounting and student management system.

## Features

- **User Login:** Secure authentication, roles (admin, accountant, parent, teacher)
- **Collections & Expenses:** Track all school finances
- **Student Management:** Add, update, archive, photo upload
- **Receipts:** Generate, print, and export branded receipts
- **SMS Reminders:** Send fee reminders via Twilio
- **Import/Export:** Bulk upload/download via .xlsx
- **Branding:** Upload logo, set colors, custom footer/marks
- **Reports:** Financial summaries, student status, more

---

## Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **SMS:** Twilio (free trial)
- **Hosting:** Render.com (free tier, connects via GitHub)

---

## Project Structure

```
GOH-Accounting-System/
├── client/           # React frontend
├── server/           # Node.js/Express backend
├── db/               # Database schema/migrations
├── .env.example      # Environment variable sample
└── README.md         # This file
```

---

## Quick Start

1. **Clone the repo** (or copy files into your GitHub repository)
2. **Set up PostgreSQL** (free on Render.com)
3. **Configure .env** (copy `.env.example` and fill in your secrets)
4. **Deploy backend and frontend** (use Render.com guides included below)
5. **Customize branding in the app settings**

---

## Free Hosting Recommendations

- [Render.com](https://render.com/) (best for beginners, generous free tier for web services and PostgreSQL)
- [Railway.app](https://railway.app/) (alternative for backend/db)
- [Vercel.com](https://vercel.com/) (for frontend only, pairs with Render for backend)

You’ll connect your GitHub repo, and Render will auto-deploy when you push changes.

---

## Environment Variables

See `.env.example` for required secrets (PostgreSQL, Twilio, etc.)

---

## Full Setup and Deployment Guide

See [SETUP.md](./SETUP.md) for a step-by-step guide.

---

## Questions?

Ask in your next chat, and I’ll guide you through every step!

```