@echo off
REM GitHub Pages and DNS Verification Script for Muhammad Usman's Portfolio

echo ========================================
echo GitHub Pages & DNS Verification Check
echo ========================================
echo.

REM Check if CNAME file exists and show content
echo [1] Checking CNAME configuration...
if exist CNAME (
    echo ✓ CNAME file found
    type CNAME
    echo.
) else (
    echo ✗ CNAME file not found!
)

REM Check GitHub Pages deployment
echo [2] Checking GitHub repository status...
git status | findstr /I "up to date"
if %errorlevel% equ 0 (
    echo ✓ Repository is up to date with GitHub
) else (
    echo ⚠ Run 'git push' to sync with GitHub
)
echo.

REM Check DNS (requires nslookup or Curl)
echo [3] DNS Resolution Check...
echo Attempting to resolve www.usman2228.com...
nslookup www.usman2228.com >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Domain resolves successfully
    nslookup www.usman2228.com
) else (
    echo ⚠ Domain not yet resolving (DNS may not be configured)
    echo   This is normal if you haven't added DNS records yet.
)
echo.

REM Check assets
echo [4] Checking project assets...
if exist assets\profile.jpg (
    echo ✓ Profile image found: assets/profile.jpg
) else (
    echo ✗ Profile image missing: assets/profile.jpg
)

if exist assets\Muhammad_Usman_Resume_Full.pdf (
    echo ✓ Resume found: assets/Muhammad_Usman_Resume_Full.pdf
) else (
    echo ✗ Resume missing: assets/Muhammad_Usman_Resume_Full.pdf
)
echo.

REM Check key files
echo [5] Checking project files...
for %%f in (index.html css\style.css js\script.js robots.txt sitemap.xml) do (
    if exist %%f (
        echo ✓ %%f found
    ) else (
        echo ✗ %%f missing
    )
)
echo.

echo ========================================
echo Next Steps:
echo ========================================
echo 1. Add CNAME record at your registrar:
echo    Host: www
echo    Value: muhammadusman2228.github.io
echo.
echo 2. Wait 5-30 minutes for DNS propagation
echo.
echo 3. Test: https://www.usman2228.com
echo.
echo 4. Register with Google Search Console:
echo    https://search.google.com/search-console
echo.
echo 5. Submit sitemap:
echo    https://www.usman2228.com/sitemap.xml
echo.
pause
