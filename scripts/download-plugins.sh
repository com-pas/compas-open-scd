#!/bin/sh
# SPDX-FileCopyrightText: 2024 Contributors to the CoMPAS project
#
# SPDX-License-Identifier: Apache-2.0

# Downloads external plugins defined in a JSON configuration file.
# Each plugin entry may include a sha256 hash for build-time integrity validation.
# If a sha256 is provided and does not match the downloaded file, the script exits
# with a non-zero status, causing the Docker build to fail.
#
# Usage: download-plugins.sh <config-file> <output-dir>
#   config-file  Path to the JSON configuration file (default: remote-plugins.json)
#   output-dir   Directory where downloaded plugins are placed (default: ./external-plugins)

set -e

CONFIG_FILE="${1:-remote-plugins.json}"
OUTPUT_DIR="${2:-./external-plugins}"

if ! command -v jq >/dev/null 2>&1; then
    echo "Error: jq is required but not installed." >&2
    exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
    echo "Error: curl is required but not installed." >&2
    exit 1
fi

if [ ! -f "$CONFIG_FILE" ]; then
    echo "Error: Configuration file '$CONFIG_FILE' not found." >&2
    exit 1
fi

PLUGIN_COUNT=$(jq '.plugins | length' "$CONFIG_FILE")
echo "Downloading $PLUGIN_COUNT plugin(s) from '$CONFIG_FILE' into '$OUTPUT_DIR'..."

i=0
while [ "$i" -lt "$PLUGIN_COUNT" ]; do
    NAME=$(jq -r ".plugins[$i].name" "$CONFIG_FILE")
    URL=$(jq -r ".plugins[$i].url" "$CONFIG_FILE")
    DEST=$(jq -r ".plugins[$i].dest" "$CONFIG_FILE")
    SHA256=$(jq -r ".plugins[$i].sha256 // empty" "$CONFIG_FILE")

    DEST_PATH="$OUTPUT_DIR/$DEST"
    DEST_DIR=$(dirname "$DEST_PATH")

    echo ""
    echo "[$((i + 1))/$PLUGIN_COUNT] $NAME"
    echo "  URL : $URL"
    echo "  Dest: $DEST_PATH"

    mkdir -p "$DEST_DIR"

    if ! curl --fail --silent --show-error --location \
            --output "$DEST_PATH" \
            "$URL"; then
        echo "Error: Failed to download plugin '$NAME' from '$URL'." >&2
        exit 1
    fi

    if [ -n "$SHA256" ]; then
        echo "  Verifying SHA256..."
        ACTUAL=$(sha256sum "$DEST_PATH" | cut -d' ' -f1)
        if [ "$ACTUAL" != "$SHA256" ]; then
            echo "Error: SHA256 mismatch for plugin '$NAME'." >&2
            echo "  Expected : $SHA256" >&2
            echo "  Actual   : $ACTUAL" >&2
            exit 1
        fi
        echo "  SHA256 OK"
    else
        echo "  Warning: No SHA256 provided for plugin '$NAME'. Skipping integrity check."
    fi

    i=$((i + 1))
done

echo ""
echo "All $PLUGIN_COUNT plugin(s) downloaded successfully."
