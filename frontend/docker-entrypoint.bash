#!/bin/sh

echo "Generating runtime config.ts..."

if [ -n "$API_BASE_URL" ]; then
    echo "export const API_BASE_URL = \"${API_BASE_URL}\"" > src/config.ts
    echo "API_BASE_URL is not set. Skipping file replacement."
fi
