import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { ITimetable, IClassLevel } from "@/interfaces";
import { getTimetable } from "./api.service";

export const useTimetableListQuery = (classLevel: IClassLevel) => {
  return useQuery<ITimetable>([KEY.TIMETABLE], async () =>
    getTimetable(classLevel),
  );
};
