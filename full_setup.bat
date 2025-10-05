@echo off
setlocal enabledelayedexpansion

REM Define root project path (adjust if your folder name is different)
set "PROJECT_PATH=%USERPROFILE%\Desktop\GOH AS"

REM Function to check npm and install if needed
echo Checking for Node.js and npm...
where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm (Node.js) is NOT installed or not in your PATH.
    echo Please download and install Node.js from: https://nodejs.org/
    echo Script cannot proceed until npm is installed.
    pause
    exit /b 1
) else (
    echo [OK] npm is present on this system.
)

REM Helper to check last command success
set "SUCCESS_MSG="
set "FAIL_MSG="

REM 1. Clean up client node_modules and lock
if exist "%PROJECT_PATH%\client\node_modules" (
    echo Removing client\node_modules ...
    rmdir /s /q "%PROJECT_PATH%\client\node_modules"
)
if exist "%PROJECT_PATH%\client\package-lock.json" (
    echo Removing client\package-lock.json ...
    del "%PROJECT_PATH%\client\package-lock.json"
)

REM 2. Clean up server node_modules and lock
if exist "%PROJECT_PATH%\server\node_modules" (
    echo Removing server\node_modules ...
    rmdir /s /q "%PROJECT_PATH%\server\node_modules"
)
if exist "%PROJECT_PATH%\server\package-lock.json" (
    echo Removing server\package-lock.json ...
    del "%PROJECT_PATH%\server\package-lock.json"
)

REM 3. Ensure Multer is upgraded in server
echo.
echo Upgrading multer to latest 2.x in server ...
cd /d "%PROJECT_PATH%\server"
npm install multer@latest

if errorlevel 1 (
    echo [ERROR] Failed to upgrade multer in server.
    pause
    exit /b 1
) else (
    echo [OK] Multer upgraded.
)

REM 4. Install server dependencies, if not already installed
echo.
if exist "%PROJECT_PATH%\server\node_modules" (
    echo [SKIP] Server dependencies already installed.
) else (
    echo Installing server dependencies ...
    cd /d "%PROJECT_PATH%\server"
    npm install
    if errorlevel 1 (
        echo [ERROR] Server dependencies failed to install.
        pause
        exit /b 1
    ) else (
        echo [OK] Server dependencies installed.
    )
)

REM 5. Install client dependencies, if not already installed
echo.
if exist "%PROJECT_PATH%\client\node_modules" (
    echo [SKIP] Client dependencies already installed.
) else (
    echo Installing client dependencies ...
    cd /d "%PROJECT_PATH%\client"
    npm install
    if errorlevel 1 (
        echo [ERROR] Client dependencies failed to install.
        pause
        exit /b 1
    ) else (
        echo [OK] Client dependencies installed.
    )
)

REM 6. Check installed packages in server
cd /d "%PROJECT_PATH%\server"
echo.
echo Checking installed server dependencies ...
npm list --depth=0
if errorlevel 1 (
    echo [ERROR] Some server dependencies missing or broken.
    pause
    exit /b 1
) else (
    echo [OK] Server dependencies check passed.
)

REM 7. Check installed packages in client
cd /d "%PROJECT_PATH%\client"
echo.
echo Checking installed client dependencies ...
npm list --depth=0
if errorlevel 1 (
    echo [ERROR] Some client dependencies missing or broken.
    pause
    exit /b 1
) else (
    echo [OK] Client dependencies check passed.
)

echo.
echo ==========================================
echo  All tasks finished successfully!
echo  Next steps:
echo   1. Configure your .env files in server and client.
echo   2. Start backend:   cd server && npm run dev
echo   3. Start frontend:  cd client && npm start
echo ==========================================
pause