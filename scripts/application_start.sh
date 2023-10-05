#!/bin/bash
cd /home/ubuntu/FE-auto
source ~/.zshrc
pm2 start yarn --name newbsm --watch -- start
