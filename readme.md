# Taleem

Core JavaScript code for Taleem Project.

## Installation

```bash
npm install taleem-lib
```

## Usage

```javascript
import Taleem from 'taleem-lib';

// Default usage (vanilla JS projects)
const assets = await Taleem.loadAssets();

// Custom assets path (recommended for Svelte and other framework projects)
const assets = await Taleem.loadAssets('/your-custom-assets-path/');

// Access loaded assets
const { bgImages, spriteImages, icons } = assets;
```
## API

### `Taleem.loadAssets(basePath)`

Loads all assets concurrently from the specified path.

#### Parameters

- `basePath` (optional): String - Base path for asset loading
  - Default: `/assets/bgImages/` (works for vanilla JS projects)
  - For Svelte and other framework projects, provide the correct path to your assets

#### Returns

- `bgImages`: Array of loaded background images
- `spriteImages`: Array of loaded sprite configurations
- `icons`: Object containing icon configurations

## Path Configuration

- **Vanilla JS Projects**: The default path `/assets/bgImages/` will work if your assets are in the correct location
- **Framework Projects (Svelte, etc.)**: You need to specify the correct path to your assets folder. Example:
  ```javascript
  const assets = await Taleem.loadAssets('/path-to-your-assets/');
  ```

## Error Handling

The library includes comprehensive error handling and will throw detailed errors if assets fail to load.

## License

MIT

---