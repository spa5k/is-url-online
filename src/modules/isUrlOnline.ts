import { requestWorks } from "./https-utils";
import { isUrlString } from "./isUrlString";
/**
 * @param  {string} url
 * @returns Promise<boolean>
 * @description Checks whether the URL is online or not by doing a request to the mentioned site.
 */
export const isUrlOnline = async (url: string): Promise<boolean> => {
  const isUrl = isUrlString(url);

  if (!isUrl) {
    return false;
  }

  // first check HEAD
  let response = await requestWorks(url, "HEAD");
  if (response) {
    return true;
  }

  // then check GET
  response = await requestWorks(url, "GET");
  return !!response;
};
