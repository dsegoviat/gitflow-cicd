#!/bin/bash

# Check if both arguments are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: Version and target branch must be provided."
  exit 1
fi

# Validate SemVer format (e.g., 1.2.3)
if [[ ! "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Error: Version number must be a valid semantic version (e.g., 1.2.3)."
  exit 1
fi

# Store parameters in variables
VERSION=$1
TARGET_BRANCH=$2

# Move to the repository directory
cd "$(git rev-parse --show-toplevel)"

# Checkout a new branch named release/vX.Y.Z
git checkout -b release/$VERSION $TARGET_BRANCH

# Add all changes
git add .

# Commit changes including the updated changelog
git commit -m "chore(release): prepare for release $VERSION"

# Push the new branch to remote
git push origin release/$VERSION

# Create a pull request using GitHub CLI
# TODO: change to 'master'
gh pr create --base main --head release/$VERSION --title "Release $VERSION" --body "Please review the release $VERSION changes"
