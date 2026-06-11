# How to Push Changes to GitHub

The changes are all committed locally in the v0 sandbox but the sandbox doesn't have internet access to push directly. Here's how to push them to your GitHub repository:

## Option 1: Quick Push (Recommended)

Run this command in your terminal:

```bash
cd faq-samagama
git push origin master
```

If prompted for credentials, enter your GitHub username and personal access token (PAT).

## Option 2: Using SSH (Recommended for future)

If you have SSH configured:

```bash
git push origin master
```

## Option 3: Using GitHub CLI

```bash
gh auth login
git push origin master
```

---

## Changes Being Pushed

**4 commits with 1001 total changes across 6 files:**

1. **eafd33f** → **1e07622** - Global styles update
   - Updated `app/globals.css` with new color system (purple brand #534AB7)
   - Enhanced navbar with glassmorphism effect
   - Added premium card shadows and transitions

2. **1e07622** → **1759db7** - Layout improvements
   - Fixed navigation links (My Issues now routes to `/issues`)
   - Enhanced navbar design (72px fixed height)
   - Updated footer styling

3. **1759db7** → **21c888c** - New Issues page
   - Created `/app/issues/page.tsx` - Track all raised issues
   - Shows issue status (resolved/pending)
   - Displays issue details with badges

4. **21c888c** → **f114231** - FAQ layout redesign
   - Changed from card-based to stacked list layout
   - Reorganized FAQs into numbered categories
   - Added smooth expand/collapse animations
   - Improved sidebar with trending FAQs and contributor stats

5. **f114231** - Documentation
   - Added `SETUP_INSTRUCTIONS.md` with complete setup guide

---

## Enhanced Raise Page

**File: `app/raise/page.tsx` (significant changes)**
- Added textarea for describing questions (4096 char limit)
- Implemented file upload for snapshots
- Added "Help another intern" queue section
- Shows 3 sample queued questions ready to answer
- Each question has an "Answer" button

---

## Files Modified

```
SETUP_INSTRUCTIONS.md  (NEW)    - Complete setup guide (319 lines)
app/globals.css        (UPDATED) - Color system & styles (+37 lines)
app/issues/page.tsx    (NEW)     - Issues tracking page (164 lines)
app/layout.tsx         (UPDATED) - Enhanced navbar & nav (+89 lines)
app/page.tsx           (UPDATED) - FAQ stacked layout (+293 lines)
app/raise/page.tsx     (UPDATED) - File upload & help section (+338 lines)
```

**Total: 1001 insertions(+), 239 deletions(-)**

---

## Verify Changes Locally

Before pushing, verify all commits are there:

```bash
git log --oneline -5
```

You should see:
```
f114231 docs: add comprehensive setup and run instructions
21c888c feat: refactor FAQCard to FAQItem and enhance FAQ display layout
1759db7 feat: introduce IssuesPage component and update layout navigation links
1e07622 feat: update global styles and layout with new color scheme and nav enhancements
eafd33f Import from intelliraff/faq-samagama
```

---

## Troubleshooting Push Issues

**Error: "fatal: could not read Username for 'https://github.com'"**
- Use SSH or generate a personal access token
- Or use: `git config --global credential.helper store`

**Error: "permission denied (publickey)"**
- Make sure your SSH key is added to GitHub
- Or use HTTPS with a token instead

**Still having issues?**

Run this to see what's happening:
```bash
git remote -v
```

Should show:
```
origin  https://github.com/intelliraff/faq-samagama.git (fetch)
origin  https://github.com/intelliraff/faq-samagama.git (push)
```

---

## That's it! 

Once you run `git push origin master`, all changes will be on GitHub.
