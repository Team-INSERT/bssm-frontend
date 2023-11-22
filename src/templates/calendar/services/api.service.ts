import httpClient from "@/apis/httpClient";
import { Calendar } from "../types";

export const getCalendarList = async (month: number) => {
  const { data } = await httpClient.calendar.get({
    params: {
      year: new Date().getFullYear(),
      month,
    },
  });
  return data;
};

export const createCalendarItem = async (calendar: Calendar) => {
  const { data } = await httpClient.calendar.post(calendar);
  return data;
};

export const deleteCalendarItem = async (id: number) => {
  const { data } = await httpClient.calendar.deleteById({ params: { id } });
  return data;
};
