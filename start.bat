@echo off
title Jabil Auto SSH
color 1F
cls

echo ================================
echo      BEM VINDO AO JABIL
echo         AUTO SSH SCRIPT
echo ================================

echo.
echo Executando node index.mjs...
echo.

cd /d "%~dp0"

node index.mjs

echo.
echo ================================
echo      SCRIPT FINALIZADO
echo ================================
echo.
echo Pressione qualquer tecla para fechar...
pause > nul
