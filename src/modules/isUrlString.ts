import URL from "url";
/**
 * @param  {string} url
 * @returns boolean
 * @description Checks whether the string mentioned is of a URL or not (offline).
 */
export const isUrlString = (url: string): boolean => {
  if (typeof url !== "string") {
    throw new TypeError(`Expected a string, got ${typeof url}`);
  }
  const trimmedUrl = url.trim();
  if (trimmedUrl.includes(" ")) {
    throw new TypeError(`There should not be any spaces within the URL`);
  }

  try {
    // eslint-disable-next-line no-new
    new URL.URL(trimmedUrl);

    return true;
  } catch {
    throw new Error("Not a valid URL string");
  }
};
