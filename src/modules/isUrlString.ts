import URL from "url";

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
