#!/bin/bash

cd lib

wget https://raw.githubusercontent.com/d3vpz/coffee/main/lib/coffee_main.js -O coffee_main.js
wget https://raw.githubusercontent.com/d3vpz/coffee/main/lib/coffee_math.js -O coffee_math.js

cd ..

wget https://raw.githubusercontent.com/d3vpz/coffee/main/coffee_update.sh -O coffee_update.sh
wget https://raw.githubusercontent.com/d3vpz/coffee/main/package.sh -O package.sh

GREEN='\033[1;32m'
echo "${GREEN}Coffee has been updated successfully.\n"