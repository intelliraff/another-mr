# FAQ Samagama - Setup & Run Instructions

## Project Overview

This is a premium FAQ Portal SaaS application built with Next.js, React, and Tailwind CSS. The platform includes:
- Interactive FAQ browser with search and filtering
- "Raise an issue" form with file upload capability
- "My Issues" page to track raised issues
- "Help another intern" section with a question queue system
- Premium UI with glassmorphism design elements
- Community stats and trending FAQs sidebar

## Recent Changes Committed

1. **feat: update global styles and layout with new color scheme and nav enhancements** (eafd33f)
   - Enhanced color system with CSS custom properties
   - Updated glassmorphism navbar with 72px height
   - Improved premium card shadow effects

2. **feat: introduce IssuesPage component and update layout navigation links** (1e07622)
   - Created `/app/issues/page.tsx` - displays user's raised issues
   - Updated navigation links to properly route to new pages
   - Fixed "My Issues" route from `/` to `/issues`

3. **feat: refactor FAQCard to FAQItem and enhance FAQ display layout** (1759db7)
   - Changed FAQ layout from card-based to clean stacked list format
   - Implemented category grouping with numbered sections
   - Added smooth expand/collapse animations with arrow indicators
   - Improved responsive design for mobile devices

## Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js or install separately)
- **Git** (for version control) - [Download here](https://git-scm.com/)

### Check if you have Node.js installed:
```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/intelliraff/faq-samagama.git
cd faq-samagama
```

### 2. Install Dependencies
Using npm:
```bash
npm install
```

Or using pnpm (faster):
```bash
pnpm install
```

Or using yarn:
```bash
yarn install
```

### 3. Verify Installation
The following dependencies should be installed:
- **Next.js** 14.2.3 - React framework
- **React** 18+ - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## Running the Application

### Development Mode (Recommended for Testing)
```bash
npm run dev
```
or
```bash
pnpm dev
```

The application will start on **http://localhost:3000** by default.

### Production Build
```bash
npm run build
npm start
```

### Linting (Check Code Quality)
```bash
npm run lint
```

## Accessing the Application

Once the dev server is running, open your browser and navigate to:

### Main Pages:
- **Home/FAQ Portal** - http://localhost:3000
  - Browse and search FAQs
  - Filter by category (All, Registration, Technical, Events, General)
  - Expand/collapse questions to view answers
  - View trending FAQs and top contributors in sidebar

- **My Questions** - http://localhost:3000/raise
  - Raise a new issue/question with textarea input
  - Upload snapshot files (optional)
  - View and answer queued questions from other interns
  - "Help another intern" section to earn Spurti Points

- **My Issues** - http://localhost:3000/issues
  - Track all issues you've raised
  - View issue status (resolved, pending)
  - See issue details and timestamps

- **AI Assistant** - http://localhost:3000/ask
  - Ask questions to the AI assistant (placeholder page)

## Features

### FAQ Portal (Homepage)
- 🔍 Real-time search across questions and answers
- 🏷️ Category filtering with visual feedback
- 📊 Community stats widget
- ⭐ Top contributors leaderboard
- 🔥 Trending FAQs section
- 📱 Fully responsive design

### Raise an Issue
- ✍️ Rich textarea with character counter (4096 max)
- 📎 File upload support (images, PDF, documents)
- 📝 Issue tracking metadata
- ❓ Community question queue
- 💰 Earn Spurti Points for helping others

### My Issues
- 📋 View all raised issues
- ✅ Track resolution status
- 📅 Timestamp for each issue
- 🔗 Links to FAQ entries

## Technology Stack

```
Frontend Framework:  Next.js 14.2.3 + React 18
Styling:            Tailwind CSS + PostCSS
Language:           TypeScript
Package Manager:    npm / pnpm / yarn
```

## Project Structure

```
faq-samagama/
├── app/
│   ├── page.tsx                 # FAQ Portal (Home)
│   ├── layout.tsx               # Global layout with navbar
│   ├── globals.css              # Global styles & design tokens
│   ├── raise/
│   │   └── page.tsx             # Raise an issue page
│   ├── issues/
│   │   └── page.tsx             # My Issues page
│   └── ask/
│       └── page.tsx             # AI Assistant (placeholder)
├── lib/
│   ├── data.ts                  # Mock FAQ data
│   └── utils.ts                 # Utility functions
├── components/
│   └── ui/                      # Reusable UI components
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
└── next.config.mjs              # Next.js configuration
```

## Key Components

### Layout (`app/layout.tsx`)
- Fixed glassmorphism navbar (72px height)
- Navigation links: FAQ Portal, AI Assistant, My Questions, My Issues, Leaderboard
- User profile button and notifications
- Footer with copyright

### FAQ Page (`app/page.tsx`)
- Hero section with search bar and category filters
- Stacked list layout with category groupings (numbered sections)
- Expand/collapse animations on FAQ items
- Right sidebar with trending FAQs, contributors, and stats

### Raise Page (`app/raise/page.tsx`)
- Stats header showing question metrics
- Question textarea with 4096 character limit
- File upload for snapshots
- "Help another intern" section with question queue
- Queue displays questions from other interns

### Issues Page (`app/issues/page.tsx`)
- List of all raised issues
- Status badges (Resolved, You marked this resolved)
- Issue date and description
- View resolution in FAQ links

## Design System

### Color Palette
- **Primary**: Purple (#534AB7)
- **Primary Light**: #7F77DD
- **Primary Dark**: #3C3489
- **Background**: #F8F9FC (light gray)
- **Card**: #FFFFFF (white)
- **Text**: #1a1a2e (dark gray)
- **Muted**: #6B7280 (medium gray)

### Typography
- **Font Family**: Inter (system font fallback)
- **Headings**: 48px-60px, bold (700)
- **Body**: 14px-16px, regular/medium (400-500)
- **Line Height**: 1.4-1.6

### Visual Effects
- **Card Shadow**: `0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)`
- **Card Shadow Hover**: `0 10px 25px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.08)`
- **Glassmorphism**: `backdrop-filter: blur(16px)` with 70% white background

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Hot Module Replacement (HMR) Not Working
```bash
# Restart the dev server
npm run dev
```

### TypeScript Errors
```bash
# Rebuild
npm run build
```

## Git Workflow (For Future Changes)

### Commit your changes:
```bash
git add .
git commit -m "feat: description of your changes"
```

### Push to GitHub:
```bash
git push origin master
```

### Pull latest changes:
```bash
git pull origin master
```

## Environment Setup (Future)

If you need to add environment variables:
1. Create a `.env.local` file in the root directory
2. Add your variables:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=FAQ Samagama
```

## Performance Notes

- Next.js provides automatic code splitting
- Tailwind CSS is optimized for production with unused styles removed
- Images are automatically optimized with Next.js Image component
- Layouts are cached for faster navigation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## License

This project is part of the Samagama internship program.

---

**Last Updated**: June 2026
**Project Version**: 0.1.0
