import { describe, expect, it } from "vitest";
import { prependHttp } from "../src";

const HTTP_RESULT_SET: {
  url: string;
  result: string;
}[] = [
  { url: "abcd.com", result: "http://abcd.com" },
  { url: "efgh.org", result: "http://efgh.org" },
  {
    url: "https://github.com/spa5k/is-url-online",
    result: "https://github.com/spa5k/is-url-online",
  },
  {
    url: "//github.com",
    result: "//github.com",
  },
  {
    url: "localhost",
    result: "http://localhost",
  },
  {
    url: "localhost:8000",
    result: "http://localhost:8000",
  },
  {
    url: "./relative",
    result: "./relative",
  },
  {
    url: "/relative",
    result: "/relative",
  },
  {
    url: "mailto:info@site.com",
    result: "mailto:info@site.com",
  },
  {
    url: "tel:1234567890",
    result: "tel:1234567890",
  },
];

const HTTPS_RESULT_SET: {
  url: string;
  result: string;
}[] = [
  { url: "abcd.com", result: "https://abcd.com" },
  { url: "efgh.org", result: "https://efgh.org" },
  {
    url: "https://github.com/spa5k/is-url-online",
    result: "https://github.com/spa5k/is-url-online",
  },
  {
    url: "//github.com",
    result: "//github.com",
  },
  {
    url: "localhost",
    result: "https://localhost",
  },
  {
    url: "localhost:8000",
    result: "https://localhost:8000",
  },
];

describe("HTTP Tests", () => {
  HTTP_RESULT_SET.forEach(({ url, result }, index) => {
    it(`#${index + 1}: Testing ${url}`, () => {
      expect(prependHttp({ url, https: false })).toStrictEqual(result);
    });
  });
});

describe("HTTPS Tests", () => {
  HTTPS_RESULT_SET.forEach(({ url, result }, index) => {
    it(`#${index + 1}: Testing ${url}`, () => {
      expect(prependHttp({ url })).toStrictEqual(result);
    });
  });
});
