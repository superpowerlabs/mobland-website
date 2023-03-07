#!/usr/bin/env bash

MAX=1
UBUNTU=`pwd | grep -c ubuntu`

if [[ "$UBUNTU" == *"/home/ubuntu"* ]]; then
  MAX=max
fi

bin/app-start.sh -a website -p 7774 -c $MAX -B bundle0 -b bundle
