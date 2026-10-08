#!/bin/sh
# A malformed login request answers with Express's full stack trace.
set -e
curl -sS --data 'x=1' http://app:10006/login | grep -q 'TypeError.*at '
