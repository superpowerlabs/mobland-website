#!/usr/bin/env bash

pnpm i
pnpm build
pm2 start index.js -i max --name website
pm2 save
#pm2 start index.js -i 1 --name website && pm2 save
