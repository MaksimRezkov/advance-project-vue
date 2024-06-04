import { AxiosResponse } from "axios";
import { HeadersResponse } from "../../types";

export function convertMethodData<D>(res: AxiosResponse<D>) {
  const { data, headers } = res;
  const resHeaders: HeadersResponse = {};

  for (let key in headers) {
    resHeaders[key] = headers[key];
  }

  return {
    data,
    headers: resHeaders,
  };
};
