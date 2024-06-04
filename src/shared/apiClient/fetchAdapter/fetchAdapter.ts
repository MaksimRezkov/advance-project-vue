import { IApiAdapter, IRequestConfig } from "../types";
import { convertMethodData } from "./helpers/convertMethodData";

export default class FetchAdapter implements IApiAdapter {
  async get<D>(url: string) {
    const res = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );

    return await convertMethodData<D>(res);
  }

  async post<Res, Req = any, C extends IRequestConfig = any>(url: string, reqData?: Req, config?: C) {
    const res = await fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify(reqData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          ...config?.headers
        },
      },
    );

    return await convertMethodData<Res>(res);
  }
}
