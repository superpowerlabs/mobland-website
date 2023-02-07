#!/usr/bin/env bash

pnpm i
pnpm build
pm2 start index.js -i max --name website -f
pm2 save
