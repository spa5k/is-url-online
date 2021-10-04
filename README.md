# Is URL Online?

A lightweight library for checking if a url is down or not. Pretty useful while checking if the url inserted is correct one or fake one as normal url checking methods won't work.

~~Only supports server side apps~~.

** Supports both Server and browser due to [cross-fetch](https://github.com/lquixada/cross-fetch) **

![npm bundle size](https://img.shields.io/bundlephobia/minzip/is-url-online?logo=files&style=for-the-badge)

![npm](https://img.shields.io/npm/v/is-url-online?logo=npm&style=for-the-badge)

![node-current](https://img.shields.io/badge/Node-%3E=12-success?style=for-the-badge&logo=node)

![npm](https://img.shields.io/npm/dw/is-url-online?style=for-the-badge)

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

await isUrlOnline("https://github.com/Unbuttun/is-url-online"); //-> true

await isUrlOnline("https://github.com/Unbuttun/notarepo"); //-> false

await isUrlOnline("notaurl"); //-> false

await isUrlOnline("ttps://github.com/Unbuttun/is-url-online abcd"); //-> false

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

### Author

[Unbuttun](https://github.com/Unbuttun)

### References.

- [`url-exists`](https://github.com/boblauer/url-exists)

- [`is-url-superb`](https://github.com/sindresorhus/is-url-superb)

- [`prepend-http`](https://github.com/sindresorhus/prepend-http)
