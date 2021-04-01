# 11ty Nostrils

A starter config for <a href="https://github.com/11ty/eleventy">Eleventy</a> with pipelines for Typescript and PostCSS.

## Features

-   Typescript bundling via <a href="https://swc.rs/">swc</a>
-   Transforming CSS imports to a single file
-   Autoprefixing via postcss-preset-env
-   Minifying CSS via cssnano
-   Minifying HTML via html-minifier
-   Shortcode for generating IMG and PICTURE elements via <a href="https://github.com/11ty/eleventy-img">eleventy-img</a> plugin

## What's missing

-   No SASS compilation
-   No linting or typechecking
-   No CSS framework
-   No JavaScript framework
-   No test framework
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

Changes to Eleventy content, Typescript/JavaScript, and CSS all trigger automatic updates in the browser.

```
npm run dev
```

### 5. Build for production

The final build is output to the "build" directory.

```
npm run build
```
