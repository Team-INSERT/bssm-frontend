import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getTimetable } from "./api.service";

interface IUseTimeTableListQueryProps {
  timetableType: "bar" | "table";
}

export const useTimetableListQuery = ({
  timetableType,
}: IUseTimeTableListQueryProps) => {
  const { data, ...queryRest } = useQuery([KEY.TIMETABLE, timetableType], () =>
    getTimetable(timetableType),
  );
  return { data: data?.timeTable, ...queryRest };
};
