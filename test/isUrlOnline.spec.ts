import { isUrlOnline } from "../src";

const URL_RESULT_SET: {
  url: string;
  result: boolean | string;
}[] = [
  { url: "google", result: false },
  { url: "bing", result: false },
  { url: "https://github.com/spa5k/is-url-online", result: true },
  {
    url: "https://github.com/spa5k/is-url-online abcd",
    result: false,
  },
  {
    url: "https://www.geeksforgeeks.org/how-to-check-whether-a-script-is-running-under-node-js-or-not/",
    result: true,
  },
  {
    url: "not a url",
    result: false,
  },
  {
    url: "https://twitter.com",
    result: true,
  },
];

describe("Correct URLs", () => {
  const urlsThatThrowError = URL_RESULT_SET.filter(
    (i) => typeof i.result === "boolean"
  );
  urlsThatThrowError.forEach(({ url, result }, index) => {
    test(`#${index + 1}: Testing ${url}`, async () => {
      expect(await isUrlOnline(url)).toBe(result);
    });
  });
});
