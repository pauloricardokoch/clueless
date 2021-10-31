#!/bin/bash

cd /app/$APP_NAME
yarn install
PORT=$PORT yarn start 