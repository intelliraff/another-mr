# 🤖 Samagama FAQ Platform

A 3-page FAQ support platform built with Next.js 14, TypeScript, and Tailwind CSS. Ready to deploy on Vercel in minutes.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| FAQ Portal | `/` | Browse, search, and filter FAQs by category |
| AI Assistant | `/ask` | Chat interface that answers from the FAQ knowledge base |
| Raise a Query | `/raise` | Submit unanswered questions for peer expert review |

---

## 🚀 Run Locally

### Step 1 — Prerequisites
Make sure you have these installed:
- [Node.js 18+](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Done!

---

## ☁️ Deploy to Vercel

### Option A — Via Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# ? Set up and deploy? Yes
# ? Which scope? (your account)
# ? Link to existing project? No
# ? Project name: faq-platform
# ? In which directory is your code? ./
# ✅ Deployed to https://faq-platform.vercel.app
```

### Option B — Via GitHub (recommended for teams)

1. Push this repo to GitHub:
```bash
git init
git add .
git commit -m "feat: initial FAQ platform"
git remote add origin https://github.com/YOUR_USERNAME/faq-platform.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Click **Deploy** — Vercel auto-detects Next.js, no config needed
5. Your site is live at `https://faq-platform.vercel.app` ✅

Every `git push` to `main` auto-deploys. Every PR gets a preview URL.

---

## 📁 Project Structure

```
faq-platform/
├── app/
│   ├── layout.tsx        ← Shared nav + footer
│   ├── page.tsx          ← FAQ Portal (/)
│   ├── ask/
│   │   └── page.tsx      ← AI Assistant (/ask)
│   ├── raise/
│   │   └── page.tsx      ← Raise a Query (/raise)
│   └── globals.css       ← Global styles
├── lib/
│   └── data.ts           ← FAQ data + AI response bank
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## ✏️ How to Add FAQs

Open `lib/data.ts` and add a new entry to the `faqs` array:

```ts
{
  id: 11,
  question: "Your new question here?",
  answer: "The answer goes here.",
  category: "general", // events | registration | technical | general
},
```

To add AI responses, add to the `aiResponses` array:

```ts
{
  keywords: ["keyword1", "keyword2"],
  answer: "The AI will say this when those keywords are detected.",
},
```

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) — Deployment
