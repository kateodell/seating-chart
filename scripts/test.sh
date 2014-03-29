#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

/usr/local/lib/node_modules/karma/bin/karma start $BASE_DIR/../config/karma.conf.js $*
