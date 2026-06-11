# Push Complete FAQ Portal Website to "another" Repository

## Problem
The v0 sandbox environment doesn't have internet access to push directly to GitHub.

## Solution
You need to run these commands on YOUR LOCAL MACHINE where you have internet access.

---

## EASY WAY (Recommended) - Use One Command

Open your command prompt/terminal and run this SINGLE command:

```bash
cd faq-samagama && git remote add another https://github.com/intelliraff/another.git && git push -u another master
```

That's it! All code will be pushed to your "another" repo.

---

## MANUAL WAY - Step by Step

If the above doesn't work, follow these steps:

### Step 1: Navigate to your project
```bash
cd faq-samagama
```

### Step 2: Add the new remote
```bash
git remote add another https://github.com/intelliraff/another.git
```

### Step 3: Push all code to the new repo
```bash
git push -u another master
```

### Step 4: Verify it worked
Go to: https://github.com/intelliraff/another
You should see all the code there!

---

## WHAT GETS PUSHED

When you run these commands, the following will be pushed to your "another" repo:

✅ Premium FAQ Portal (homepage with stacked list layout)
✅ Raise an Issue page (with file upload)
✅ My Issues tracking page (issue history)
✅ Help Another Intern queue (answer questions)
✅ Complete Next.js setup with Tailwind CSS
✅ All 7 commits with full history
✅ All styling and configuration files
✅ 1200+ lines of professional code

---

## PROJECT STRUCTURE

```
faq-samagama/
├── app/
│   ├── layout.tsx           (Main layout with navbar)
│   ├── page.tsx             (FAQ Portal - homepage)
│   ├── globals.css          (Global styles & colors)
│   ├── raise/
│   │   └── page.tsx         (Raise issue form + help queue)
│   ├── issues/
│   │   └── page.tsx         (Issue tracking)
│   └── ask/
│       └── page.tsx         (AI Assistant placeholder)
├── lib/
│   └── data.ts              (FAQ data & utilities)
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## URLs AVAILABLE

Once running locally:

- http://localhost:3000           → FAQ Portal (homepage)
- http://localhost:3000/raise     → Raise an issue
- http://localhost:3000/issues    → My issues
- http://localhost:3000/ask       → AI Assistant

---

## IF YOU GET AN ERROR

### Error: "fatal: could not read Username for 'https://github.com'"
**Solution:** Make sure you have internet connection and Git is installed properly

### Error: "remote already exists"
**Solution:** Run this first:
```bash
git remote remove another
git remote add another https://github.com/intelliraff/another.git
git push -u another master
```

### Error: "permission denied"
**Solution:** Make sure you have push access to https://github.com/intelliraff/another.git
Generate a GitHub Personal Access Token and use it instead of password

---

## SUMMARY

All code is ready locally. You just need to run ONE command on your machine:

```bash
cd faq-samagama && git remote add another https://github.com/intelliraff/another.git && git push -u another master
```

Everything will be pushed to your new repository!
