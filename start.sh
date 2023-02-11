#!/usr/bin/env bash

pnpm i
pnpm build
pm2 delete website
pm2 start index.js -i max --name website
pm2 save
