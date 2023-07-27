import KEY from "@/global/constants/key.constant";
import ITimetable from "@/global/types/timetable.type";
import { useQuery } from "react-query";
import IGrade from "@/global/types/grade.type";
import { getTimetable } from "./api.service";

export const useTimetableListQuery = ({ userGrade, userClass }: IGrade) => {
  return useQuery<ITimetable>([KEY.TIMETABLE], async () =>
    getTimetable({ userGrade, userClass }),
  );
};
