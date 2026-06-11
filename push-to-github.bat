@echo off
REM FAQ Samagama - Push to GitHub Script (Windows)
REM This script will push all the v0 changes to your GitHub repository

echo.
echo ==========================================
echo   FAQ Samagama - Push to GitHub
echo ==========================================
echo.

REM Check if we're in a git repository
if not exist ".git" (
    echo ERROR: Not in a git repository!
    echo Please run this script from the faq-samagama directory
    pause
    exit /b 1
)

echo Checking git status...
git status

echo.
echo Pushing commits to GitHub...
git push origin master

if %errorlevel% equ 0 (
    echo.
    echo [SUCCESS] All commits pushed to GitHub!
    echo.
    echo Your repository is now updated with:
    echo - Premium FAQ Portal with stacked list layout
    echo - Raise an issue page with file upload
    echo - My issues tracking page
    echo - Help another intern queue
    echo.
    echo View your changes at:
    echo https://github.com/intelliraff/faq-samagama
) else (
    echo.
    echo [ERROR] Push failed. Please check your network connection and try again.
    pause
    exit /b 1
)

pause
