#!/bin/bash

cd /usr/share/nginx/html
echo "============ Iniciando o npm install ============"
npm install --unsafe-perm
echo "============ Gerando build ============"
node node_modules/@angular/cli/bin/ng build
echo "============ Build concluído ============"

nginx -g "daemon off;" "$@"