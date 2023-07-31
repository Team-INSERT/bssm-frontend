import httpClient from "@/apis/httpClient";
import IClassLevel from "@/global/types/classLevel.type";

export const getTimetable = async (classLevel: IClassLevel) => {
  const { data } = await httpClient.timetable.getTimetable({
    params: classLevel,
  });

  return data;
};
