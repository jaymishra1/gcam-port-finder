# GCam Port Finder

A React component library to help users find relevant Google Camera (GCam) ports for their smartphones.

This package is created by [GCam Ports](https://www.gcamports.com/) - The ultimate destination for finding the best Google Camera ports for your smartphone.

## Features

- 🔍 Search for GCam ports by device model
- 📱 Browse popular brands with pre-configured ports
- 🚀 Easy installation guide included
- 🌗 Light and dark theme support
- 📦 Fully customizable components

## Installation

```bash
npm install gcam-port-finder
# or
yarn add gcam-port-finder
```

## Usage

### Basic Usage

```jsx
import React from "react";
import GCamPortFinder from "gcam-port-finder";

function App() {
  return (
    <div className="app">
      <h1>Find a GCam Port for Your Device</h1>
      <GCamPortFinder
        theme="light"
        onResultClick={(port) => console.log("Selected port:", port)}
      />
    </div>
  );
}

export default App;
```

### Advanced Usage

```jsx
import React from "react";
import { GCamPortFinder, SearchBox, BrandList } from "gcam-port-finder";
import { fetchGCamPorts } from "gcam-port-finder";

function CustomGCamFinder() {
  const customBrands = ["Samsung", "Xiaomi", "OnePlus", "Google"];

  const handlePortSelection = (port) => {
    console.log("Selected port:", port);
    // Implement your custom logic here
  };

  return (
    <div className="custom-finder">
      <GCamPortFinder
        apiBaseUrl="https://your-custom-api.com/api"
        defaultBrands={customBrands}
        theme="dark"
        onResultClick={handlePortSelection}
        showInstallGuide={true}
      />
    </div>
  );
}

export default CustomGCamFinder;
```

## Components

The package exports the following components:

### `<GCamPortFinder />`

The main component that wraps all functionality.

#### Props

| Prop               | Type                | Default                              | Description                                             |
| ------------------ | ------------------- | ------------------------------------ | ------------------------------------------------------- |
| `apiBaseUrl`       | `string`            | `'https://gcamapk.io/wp-json/wp/v2'` | Base URL for the API                                    |
| `defaultBrands`    | `string[]`          | `[]`                                 | List of brands to display (uses built-in list if empty) |
| `theme`            | `'light' \| 'dark'` | `'light'`                            | UI theme                                                |
| `onResultClick`    | `function`          | `undefined`                          | Callback when a result is clicked                       |
| `showInstallGuide` | `boolean`           | `true`                               | Whether to show the install guide button                |

### `<SearchBox />`

A standalone search input with button.

#### Props

| Prop       | Type       | Description                       |
| ---------- | ---------- | --------------------------------- |
| `value`    | `string`   | Current search query              |
| `onChange` | `function` | Callback for input changes        |
| `onSearch` | `function` | Callback when search is submitted |

### `<BrandList />`

A list of smartphone brands displayed as buttons.

#### Props

| Prop            | Type       | Description                       |
| --------------- | ---------- | --------------------------------- |
| `brands`        | `string[]` | List of brands to display         |
| `onBrandSelect` | `function` | Callback when a brand is selected |
| `selectedBrand` | `string`   | Currently selected brand          |

### `<InstallGuide />`

A modal dialog showing installation instructions.

#### Props

| Prop      | Type       | Description                       |
| --------- | ---------- | --------------------------------- |
| `onClose` | `function` | Callback when the guide is closed |

### `<ResultList />`

A list of GCam port results.

#### Props

| Prop          | Type       | Description                            |
| ------------- | ---------- | -------------------------------------- |
| `results`     | `object[]` | Array of GCam port objects             |
| `onItemClick` | `function` | Callback when a result item is clicked |

## API

### `fetchGCamPorts(baseUrl, query)`

Utility function to fetch GCam ports from the API.

#### Parameters

- `baseUrl` (string): The base URL for the API
- `query` (string): The search query (device model or brand)

#### Returns

A Promise that resolves to an array of GCam port objects.

## Customization

### Styling

The package includes default styles but you can override them with your own CSS. The component uses BEM-like class names prefixed with `gcam-` for easy targeting.

### Theming

The package supports light and dark themes out of the box. You can pass the `theme` prop to switch between them.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## About

This package is developed and maintained by [GCam Ports](https://www.gcamports.com/), your trusted resource for Google Camera ports for all Android devices.

## Contributing

Contributions are welcome! Please feel free to submit a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
