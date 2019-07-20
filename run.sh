#!/bin/bash
# point to nvm.sh
export PATH=$PATH:$NVM_DIR/
nvm.sh install 9.0
nvm.sh use 9.0
# install json-server for group
npm install -g json-server
# host 0.0.0.0 port 9090
json-server --watch products.json --host 0.0.0.0 --port 9090
