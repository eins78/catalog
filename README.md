![Catalog Logo](docs/assets/catalog_logo.svg?raw=true)

# Catalog

Catalog lets you create beautiful living style guides quickly and easily.

Content is written in Markdown so you can focus on documenting your components.

The [standalone version](http://interactivethings.github.io/catalog/#/usage) is completely dependency free, making it trivial to integrate Catalog into your application.

Catalog can also be [directly integrated into a React app](http://interactivethings.github.io/catalog/#/react) to document components directly.

[Read Catalog's documentation](http://interactivethings.github.io/catalog/) (built with Catalog!) to find out more.

## Installation

#### Standalone Builds

- Production: https://npmcdn.com/catalog/catalog.min.js
- Development (with helpful warnings): https://npmcdn.com/catalog/catalog.js

#### Prerelease Builds

- Production: https://npmcdn.com/catalog@next/catalog.min.js
- Development: https://npmcdn.com/catalog@next/catalog.js

#### npm

```
npm install catalog --save
```

The `react`, `react-dom`, `react-router`, and `history` modules are peerDependencies, so you need to install them separately.

## Development

```
make
```

installs npm dependencies and starts the development server.

```
make watch-lib
``` 

builds the files from `src/` into `lib/` continuously. Useful with `npm link` when you want to test integration with another app.

```
make build
```

builds `catalog.js`, `catalog.min.js`, and `lib/`

```
make test
```

runs tests

## Releasing

```
make dist
```

prompts for a new version number and publishes to npm. _Don't edit package.json manually._

```
make gh-pages
```

builds and publishes Catalog's documentation to GitHub Pages

## Credits

Catalog is developed by [many people](https://github.com/interactivethings/catalog/blob/master/AUTHORS) at [Interactive Things](http://www.interactivethings.com/), a User Experience and Data Visualization Studio based in Zürich.