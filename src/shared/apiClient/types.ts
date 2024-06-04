/** Методы которые реализует сервис запросов */
export interface IApiClientMethods {
  get: <Res, C extends IRequestConfig = any>(url: string, config?: C) => Promise<IApiGetResponse<Res>>;

  post: <Res, Req, C extends IRequestConfig>(url: string, reqData?: Req, config?: C) => Promise<IApiPostResponse<Res>>;
}

export interface IRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  data?: any;
  headers?: { [key: string]: string };
  params?: any;
}

/** Главный внешний клиент, через которого производятся запросы */
export interface IApiClient extends IApiClientMethods {
  /** Обёртка над сущностью, которая непосредственно производит запросы */
  adapter: IApiAdapter;
}

/** Обёртка над сущностью, которая непосредственно производит запросы */
export interface IApiAdapter extends IApiClientMethods {}

export interface IApiGetResponse<D = any> {
  data: D;
  headers: HeadersResponse;
}

export interface IApiPostResponse<R> extends IApiGetResponse<R> {}

export type HeadersResponse = { [key: string]: string };
