#!/bin/bash

ENV=$(grep NODE_ENV .env | cut -d '=' -f2)

if [ $ENV = "production" ]
then
    echo "PinkThursday started in mode: \"$ENV\"";
    npm run start
else 
    echo "PinkThursday started in mode: \"$ENV\"";
    npm run start:dev
fi