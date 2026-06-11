#!/bin/bash

# FAQ Samagama - Push to GitHub Script
# This script will push all the v0 changes to your GitHub repository

echo "=========================================="
echo "  FAQ Samagama - Push to GitHub"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo "ERROR: Not in a git repository!"
    echo "Please run this script from the faq-samagama directory"
    exit 1
fi

echo "Checking git status..."
git status

echo ""
echo "Pushing commits to GitHub..."
git push origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! All commits pushed to GitHub!"
    echo ""
    echo "Your repository is now updated with:"
    echo "- Premium FAQ Portal with stacked list layout"
    echo "- Raise an issue page with file upload"
    echo "- My issues tracking page"
    echo "- Help another intern queue"
    echo ""
    echo "View your changes at:"
    echo "https://github.com/intelliraff/faq-samagama"
else
    echo ""
    echo "❌ Push failed. Please check your network connection and try again."
    exit 1
fi
