#!/usr/bin/env bash

MAX=1

if [[ `pwd` == "/home/ubuntu/mobland-website" ]]
then
  MAX=max
fi

bin/app-start.sh -a website -p 7774 -c $MAX -b bundle -B bundle
