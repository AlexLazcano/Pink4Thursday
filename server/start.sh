#!/bin/bash

if [ "$NODE_ENV" = "production" ]
then
    echo "PinkThursday started in mode: \"production\"";
    npm run start
else 
    echo "PinkThursday started in mode: \"development\"";
    npm run start:dev
fi