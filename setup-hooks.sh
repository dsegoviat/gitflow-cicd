#!/usr/bin/env sh

chmod +x hooks/* && mkdir -p .git/hooks && cp hooks/* .git/hooks/ && chmod +x .git/hooks/*
echo "Successfully configured Git Hooks!"