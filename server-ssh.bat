@echo off
title Jabil SSH Server
chcp 65001 > nul
color 0A
cls

cd /d "%~dp0"

:: Mensagem para garantir que a fonte usada aceite os caracteres
echo Iniciando aplicação com suporte a UTF-8...
echo Use Windows Terminal com fonte compatível como Cascadia Code PL ou Fira Code.
echo.

node index.mjs

pause > nul
