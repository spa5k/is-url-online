import fetch from "cross-fetch";
import { isUrlString } from "./isUrlString";

/**
 * @param  {string} url
 * @returns Promise<boolean>
 * @description Checks whether the URL is online or not by doing a request to the mentioned site.
 */
export const isUrlOnline = async (url: string): Promise<boolean> => {
  const isString = isUrlString(url);

  if (!isString) {
    return false;
  }

  const response = await fetch(url);
  if (!response) {
    return false;
  }

  if (response.status > 400 && response.status < 500) {
    return false;
  }
  return true;
};
