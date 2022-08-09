import { type IncomingMessage } from "http";
import { request } from "https";

function isStatusOK(result: IncomingMessage) {
  return (
    result.statusCode !== undefined &&
    result.statusCode >= 200 &&
    result.statusCode <= 399
  );
}

/**
 * Check if a request for the given URL works
 *
 * @param url The given URL
 * @returns A promise that resolves to a boolean indicating if the URL works
 *
 * @note the function doesn't throw an exception
 */
export function requestWorks(
  url: string,
  method: string | undefined
): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    try {
      const req = request(url, { method }, (result) => {
        resolve(isStatusOK(result));
      });
      req.on("error", (_error) => {
        resolve(false);
      });
      req.end();
    } catch {
      resolve(false);
    }
  });
}
