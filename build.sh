#!/bin/sh
list="$(find ./src -name '*.js')"
for file in $list; do 
  f=$(basename $file)
  f1=${f%.*}
  node_modules/.bin/rollup --input src/$f -c -o dist/$f1.min.js
done

#node_modules/.bin/rollup --input src/$1.js -c -o dist/$1.min.js
#echo $1 $2