Directory containing fixed nsdoc for the 'Validation' plugin:

- IEC_61850-7-2_2007XX-en.nsdoc
- IEC_61850-7-3_2007XX-en.nsdoc
- IEC_61850-7-4_2007XX-en.nsdoc
- IEC_61850-8-1_2003XX-en.nsdoc

Where `XX` represents the revision and release values.

This directory should also contain a `manifest.json` file listing all available NSDOC files for dynamic discovery. If the manifest is not present, the system will fall back to pattern-based file discovery.

## Fallback pattern discovery

When manifest.json is not available, the service checks for files using these patterns:

- Standards 7-2, 7-3, 7-4: `2007B5` to `2007B9` (stops at first found)
- Standard 8-1: `2003A2` to `2003A9` (stops at first found)
