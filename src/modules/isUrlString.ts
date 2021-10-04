/**
 * @param  {string} url
 * @returns boolean
 * @description Check if a string is a URL.
 */

export const isUrlString = (url: string): boolean => {
  if (typeof url !== "string") {
    return false;
  }
  const trimmedUrl = url.trim();
  if (trimmedUrl.includes(" ")) {
    return false;
  }

  try {
    // eslint-disable-next-line no-new
    new URL(trimmedUrl);

    return true;
  } catch {
    return false;
  }
};
