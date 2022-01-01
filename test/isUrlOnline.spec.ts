import { describe, expect, it } from "vitest";
import { isUrlOnline } from "../dist";

describe("Correct URLs", () => {
  it(`1. google`, async () => {
    expect(await isUrlOnline("https://google.com")).toBe(true);
  });
  it(`2. bing`, async () => {
    expect(await isUrlOnline("https://bing.com")).toBe(true);
  });
  // false return, wrong url
  it(`3. github`, async () => {
    expect(
      await isUrlOnline("https://github.com/spa5k/is-url-online abcd")
    ).toBe(false);
  });
  // twitter to be true
  it(`4. twitter`, async () => {
    expect(await isUrlOnline("https://twitter.com")).toBe(true);
  });
  // not a url in url
  it(`5. not a url`, async () => {
    expect(await isUrlOnline("not a url")).toBe(false);
  });
  // geeksforgeeks url
  it(`6. geeksforgeeks`, async () => {
    expect(
      await isUrlOnline(
        "https://www.geeksforgeeks.org/how-to-check-whether-a-script-is-running-under-node-js-or-not/"
      )
    ).toBe(true);
  });
});
