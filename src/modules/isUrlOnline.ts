import { fetch } from "ohmyfetch";
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
  let response;
  try {
    response = await fetch(url, { method: "HEAD" });
  } catch {
    return false;
  }
  if (response.ok) {
    return true;
  }
  if (!response) {
    try {
      response = await fetch(url, { method: "GET" });
    } catch {
      return false;
    }
  }
  if (response.ok) {
    return true;
  }

  if (response.status > 400 && response.status < 500) {
    return false;
  }
  return true;
};
