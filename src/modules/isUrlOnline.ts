import got from "got";
import { isUrlString } from "./isUrlString";

export const isUrlOnline = async (url: string): Promise<boolean> => {
  try {
    isUrlString(url);
  } catch {
    return false;
  }

  const response = await got.head(url, {
    throwHttpErrors: false,
  });

  if (!response) {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (response.statusCode > 400 && response.statusCode <= 500) {
    return false;
  }
  return true;
};
