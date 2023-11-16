import httpClient from "@/apis/httpClient";
import { Calender } from "../interfaces";

export const getCalenderList = async (month: number) => {
  const { data } = await httpClient.calender.get({
    params: {
      year: new Date().getFullYear(),
      month,
    },
  });
  return data;
};

export const createCalenderItem = async (calender: Calender) => {
  const { data } = await httpClient.calender.post(calender);
  return data;
};

export const deleteCalenderItem = async (id: number) => {
  const { data } = await httpClient.calender.deleteById({ params: { id } });
  return data;
};
