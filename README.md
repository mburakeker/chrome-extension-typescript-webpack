# Minimal Chrome Extension with TypeScript and Webpack

This is a minimal Chrome extension built with TypeScript and Webpack. This version does not use React. Webpack is used for transpiling, bundling, and handling the asset folder.

## Features

- Listens for a click on the extension action button and sends a message to the content script.
- The content script monitors changes to the DOM and logs when a child node is added or removed.

## Included
- Typescript
- Types for Chrome Extension
- Webpack

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/mburakeker/chrome-extension-typescript-webpack.git
    cd chrome-extension-typescript-webpack
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Building the Extension

To build the extension, run the following command:
```sh
npm run build
```

This will create a dist folder containing the bundled files.

### Loading the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on "Load unpacked" and select the `dist` folder.

### File Descriptions

- `public/manifest.json`: The manifest file that describes the extension.
- `src/background.ts`: The background script that listens for the extension action button click.
- `src/content.ts`: The content script that monitors DOM changes.
- `src/types.ts`: TypeScript types and enums used in the project.
- `webpack.config.cjs`: Webpack configuration file.
- `tsconfig.json`: TypeScript configuration file.


### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.