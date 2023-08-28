#!/bin/bash
cd /home/ubuntu/FE-auto
pm2 start yarn --name newbsm --watch -- start
