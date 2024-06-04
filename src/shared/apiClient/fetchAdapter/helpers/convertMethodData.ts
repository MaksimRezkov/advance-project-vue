import { HeadersResponse } from "../../types";

export async function convertMethodData<D>(res: Response) {
  return res.json().then((data: D) => {
    const headers: HeadersResponse = {};
    res.headers.forEach((value, key) => {
      headers[key] = value;
    })

    return {
      data,
      headers,
    };
  });
};
