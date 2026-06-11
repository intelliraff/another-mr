#!/bin/bash

# STEP 1: Initialize the "another" repository locally
mkdir another
cd another

# STEP 2: Copy all files from faq-samagama to another
cp -r ../faq-samagama/* .

# STEP 3: Initialize git and set up the new remote
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/intelliraff/another.git
git push -u origin main

echo "Successfully pushed to https://github.com/intelliraff/another.git"
