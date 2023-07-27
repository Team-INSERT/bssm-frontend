import KEY from "@/global/constants/key.constant";
import ITimetable from "@/global/types/timetable.type";
import { useQuery } from "react-query";
import IClassLevel from "@/global/types/classLevel.type";
import { getTimetable } from "./api.service";

export const useTimetableListQuery = (classLevel: IClassLevel) => {
  return useQuery<ITimetable>([KEY.TIMETABLE], async () =>
    getTimetable(classLevel),
  );
};
