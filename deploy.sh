#! /bin/bash

yarn build && \
    aws2 s3 sync --profile jw ./build s3://jonathanwhittledev.com
