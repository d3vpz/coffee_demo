#!/bin/bash
cd lib

wget https://raw.githubusercontent.com/d3vpz/coffee/main/lib/coffee_main.js -O coffee_main.js
wget https://raw.githubusercontent.com/d3vpz/coffee/main/lib/coffee_math.js -O coffee_math.js

BOLD=$(tput bold)
GREEN='\033[1;32m'
echo "${GREEN}Coffee has been updates successfully.\n"