import httpClient from "@/apis/httpClient";
import { IClassLevel } from "@/interfaces";

export const getTimetable = async (classLevel: IClassLevel) => {
  const { data } = await httpClient.timetable.getTimetable({
    params: classLevel,
  });

  return data;
};
