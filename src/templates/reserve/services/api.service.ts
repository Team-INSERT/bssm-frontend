import httpClient from "@/apis/httpClient";
import { ICreateReserve } from "@/interfaces";

export const getReserveList = async (date: string) => {
  const { data } = await httpClient.reserve.get({ params: { date } });
  return data;
};

export const createReserve = async (reserve: ICreateReserve) => {
  const { data } = await httpClient.reserve.post(reserve);
  return data;
};

export const deleteReserve = async (id: number) => {
  const { data } = await httpClient.reserve.deleteById({ params: { id } });
  return data;
};
