#!/bin/bash
#author: Adilhyz
cd ..
git add .
read -p "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: Adilhyz's Note update $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
git push
