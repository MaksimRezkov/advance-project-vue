import axios from "axios";
import { IApiAdapter, IRequestConfig } from "../types";
import { convertMethodData } from "./helpers/convertMethodData";

export const axiosInstance = axios.create();

export default class AxiosAdapter implements IApiAdapter {
  async get<Res, C extends IRequestConfig = any>(url: string, config?: C) {
    const res = await axiosInstance.get<Res>(url, config);
    return convertMethodData<Res>(res);
  }

  async post<Res, Req = any, C extends IRequestConfig = any>(url: string, reqData?: Req, config?: C) {
    const res = await axiosInstance.post<Res>(url, reqData, { ...config });
    return convertMethodData<Res>(res);
  }
}
