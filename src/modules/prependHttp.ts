export type PrependHTTP = {
  url: string;
  https?: boolean;
};
export const prependHttp = ({
  url,
  https = true,
}: PrependHTTP): string | boolean => {
  const trimmedUrl = url.trim();

  if (/^\.*\/|^(?!localhost)\w+:/u.test(trimmedUrl)) {
    return url;
  }

  return trimmedUrl.replace(
    // eslint-disable-next-line unicorn/no-unsafe-regex
    /^(?!(?:\w+:)?\/\/)/u,
    https ? "https://" : "http://"
  );
};
