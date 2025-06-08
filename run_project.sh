#!/bin/bash
set -e

# Build and run NumberNinja locally
# This script assumes Node.js is installed.

# Run unit tests
node test/screenUnits.test.js

# Example of invoking numi-cli if installed
if command -v numi-cli >/dev/null 2>&1; then
    echo "numi-cli example output:"
    numi-cli "20 inches in cm"
else
    echo "numi-cli is not installed. You can install it using:\n  curl -sSL https://s.numi.app/cli | sh" >&2
fi
