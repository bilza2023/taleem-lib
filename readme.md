# README.md
# Taleem

A JavaScript library for efficiently loading and managing educational assets including background images, sprites, and icons.

## Installation

```bash
npm install taleem-lib
```

## Usage

```javascript
import Taleem from 'taleem-lib';

// Load all assets
const assets = await Taleem.loadAssets();

// Access loaded assets
const { bgImages, spriteImages, icons } = assets;
```

## Features

- Concurrent loading of background images and sprites
- Built-in error handling
- Support for multiple asset types:
  - Background images (various textures and patterns)
  - Educational sprites (students, figures, alphabets, people)
  - Icons

## API

### `Taleem.loadAssets()`

Loads all assets concurrently and returns a promise that resolves with an object containing:
- `bgImages`: Array of loaded background images
- `spriteImages`: Array of loaded sprite configurations
- `icons`: Object containing icon configurations

## Error Handling

The library includes comprehensive error handling and will throw detailed errors if assets fail to load.

## License

MIT

---
