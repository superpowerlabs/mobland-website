#!/bin/env bash

git pull
pnpm i
pnpm build
pm2 restart website
