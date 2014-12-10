#!/bin/sh

ffmpeg -f qtkit -i "default" \
       -g 52 -strict experimental -acodec aac -ab 56k -vcodec libx264 -vb 452k \
       -level 40 -r 16 \
       -f flv "rtmp://localhost:8081/publish/first?secret"
       