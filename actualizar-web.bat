@echo off
setlocal

cd /d "%~dp0"

echo.
echo Actualizando repositorio de la web personal...
echo.

git add .

for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format \"yyyy-MM-dd HH:mm:ss\""') do set FECHA=%%i

git commit -m "Actualiza web personal %FECHA%"
if errorlevel 1 (
  echo.
  echo No hay cambios nuevos para guardar o hubo un problema al crear el commit.
  echo.
)

git push
if errorlevel 1 (
  echo.
  echo Hubo un problema al subir los cambios a GitHub.
  pause
  exit /b 1
)

echo.
echo Cambios subidos correctamente.
echo Tu web se actualizara en GitHub Pages en unos minutos.
echo.
pause
