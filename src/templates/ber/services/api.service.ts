import httpClient from "@/apis/httpClient";
import { ICreateReserve } from "@/interfaces";

export const getReserveList = async (date: string) => {
  const { data } = await httpClient.ber.get({ params: { date } });
  return data;
};

export const createReserve = async (berReserve: ICreateReserve) => {
  const { data } = await httpClient.ber.post(berReserve);
  return data;
};

export const deleteReserve = async (id: number) => {
  const { data } = await httpClient.ber.deleteById({ params: { id } });
  return data;
};
