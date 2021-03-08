# 11ty Nostrils

A starter config for <a href="https://github.com/11ty/eleventy">Eleventy</a> with pipelines for Typescript and PostCSS.

## Features

-   Typescript compilation
-   Transforming CSS imports to a single file
-   Autoprefixing via postcss-preset-env
-   Minifying CSS via cssnano
-   Minifying HTML via html-minifier
-   Minifying JS via terser

## What's missing

-   No bundler
-   No SASS compilation
-   No CSS framework
-   No JavaScript framework
-   No test framework
-   No image transformations
-   No shortcodes
-   No environment variables
-   No template language assumptions
-   No built-in deployment targets

## Getting started

### 1. Clone this repo

```
git clone https://github.com/cbergen/11ty-nostrils.git my-project
```

### 2. Navigate to directory

```
cd my-project
```

### 3. Install node dependencies

```
npm install
```

### 4. Start a dev server

Changes to Eleventy content, Typescript/JavaScript, and CSS all trigger automatic updates in the browser. In development mode no transformations or optimizations are made.

```
npm run dev
```

### 5. Build for production

The final build is output to the "dist" directory.

```
npm run build
```
