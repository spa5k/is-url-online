# Is URL Online?

A lightweight library for checking if a url is down or not. Pretty useful while checking if the url inserted is correct one or fake one as normal url checking methods won't work.

**Supports both Server and browser due to [ohmyfetch](https://github.com/unjs/ohmyfetch)**

![npm bundle size](https://img.shields.io/bundlephobia/minzip/is-url-online?logo=files&style=for-the-badge)

[![NPM downloads](https://img.shields.io/npm/dm/is-url-online.svg?style=for-the-badge)](https://www.npmjs.com/package/is-url-online)
[![npm](https://img.shields.io/npm/v/is-url-online?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/is-url-online)
![node-current](https://img.shields.io/badge/Node-%3E=14-success?style=for-the-badge&logo=node)

## Getting started

`pnpm install is-url-online`

or

`npm install is-url-online`

or

`yarn add is-url-online`

## Improvements over other libraries

- Promise based usage.

- Works on both CommonJs and EsModule based libraries.

- Smaller install size because of just one dependency.

- Built using typescript.

- Catches invalid URLs.

- Actively maintained.

- Automated Dependency update and publishing after successful tests.

- Has helper methods to deal with extra usecases.

## Usage

```ts
import { isUrlOnline } from "is-url-online";

await isUrlOnline("https://github.com/spa5k/is-url-online"); //-> true

await isUrlOnline("https://github.com/spa5k/notarepo"); //-> false

await isUrlOnline("notaurl"); //-> false

await isUrlOnline("ttps://github.com/spa5k/is-url-online abcd"); //-> false
//because of a space in middle.
```

## Utils

### Only Check URL String

This helper method will validate the URL string without checking it online.

```ts
import { isUrlString } from "is-url-online";

await isUrlString("https://google.com"); //-> true

await isUrlString("https://google.com/404ingURL"); //-> true

await isUrlString("notaurl"); //-> false
```

It uses URL module under the hood.

### Prepend HTTP/HTTPS

This helper method prepend `https://` or `http://` to humanized URLs like `github.com` and `localhost`

```ts
import { prependHttp } from "is-url-online";

// HTTPS is enabled by default.

prependHttp({ url: "github.com" }); //-> https://github.com

prependHttp({ url: "github.com", https: false }); //-> http://github.com
```

### Visualization of this Repo.

![Visualization of this repo](./diagram.svg)

### References.

- [`url-exists`](https://github.com/boblauer/url-exists)

- [`is-url-superb`](https://github.com/sindresorhus/is-url-superb)

- [`prepend-http`](https://github.com/sindresorhus/prepend-http)
