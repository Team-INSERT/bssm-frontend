import { useQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getTimetable } from "./api.service";

export const useTimetableListQuery = () => {
  const { data, ...queryRest } = useQuery([KEY.TIMETABLE], getTimetable);
  return { data: data?.timeTable, ...queryRest };
};
