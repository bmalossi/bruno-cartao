@echo off
git status > status_bat.txt 2>&1
git remote -v >> status_bat.txt 2>&1
git log -1 >> status_bat.txt 2>&1
dir >> status_bat.txt 2>&1
