#!/usr/bin/env sh

echo "installing deps"
apk -U add gettext

case "$sku" in
          Basic)
            export sku=1
            ;;
          Standard)
            export sku=2
            ;;
          Premium)
            export sku=3
            ;;
        esac

echo "substituting environment variables in parameters file"       
cat /parametersTemplate.json | envsubst > /parameters.json

# @todo: remove once opspec supports explicit binding files as op inputs
cat /template.json > /templateFile.json