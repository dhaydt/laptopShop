#!/usr/bin/env sh

# abort on errors
# set -e

# build
npm run generate

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

git add .
git commit -m "auto-push"
git push -u origin main

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:dhaydt/vue-porto.git origin:gh-pages

# git subtree push --prefix dist origin gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

# cd -
