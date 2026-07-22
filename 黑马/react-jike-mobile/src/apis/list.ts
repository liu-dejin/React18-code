import { http } from "@/utils";
import type {
  ChannelRes,
  DetailRes,
  ListRes,
  ReqParams,
  ResType,
} from "./common";

export const getChannelsApi = () =>
  http.request<ResType<ChannelRes>>({
    url: "/channels",
  });

export const getListApi = (params: ReqParams) =>
  http.request<ResType<ListRes>>({
    url: "/articles",
    params,
  });

export const getDetailApi = (id: string) =>
  http.request<ResType<DetailRes>>({
    url: `/articles/${id}`,
  });
