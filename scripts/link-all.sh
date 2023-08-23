#!/bin/bash

# List of dependencies.
packages="react react-dom @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid @remix-run/react"

if [ $# -ne 1 ]; then
  echo "Please provide the path to the FE app (e.g. '../s4-app')"
  exit 1
fi

package_paths=""

# Link dependencies.
for package in $packages; do
  package_paths+="${1}/node_modules/${package} "
done

npm link $package_paths

# Make project linkable
npm link
