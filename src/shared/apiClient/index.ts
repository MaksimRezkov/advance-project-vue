import AxiosAdapter from "./axiosAdapter/axiosAdapter";
import { IApiClient, IApiAdapter, IRequestConfig } from "./types";

class ApiClient implements IApiClient {
  adapter;
  constructor (adapter: IApiAdapter) {
    this.adapter = adapter;
  }

  async get<Res, C extends IRequestConfig = any>(url: string, config?: C) {
    return await this.adapter.get<Res, C>(url, config);
  }

  async post<Res, Req = any, C extends IRequestConfig = any>(url: string, reqData?: Req, config?: C) {
    return await this.adapter.post<Res, Req, C>(url, reqData, config);
  }
}

const axiosAdapter = new AxiosAdapter(); // Либо это
// const fetchAdapter = new FetchAdapter(); // Либо это
export const apiClient = new ApiClient(axiosAdapter);
