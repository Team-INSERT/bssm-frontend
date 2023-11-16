import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getCalendarList } from "./api.service";

export const useCalendarListQuery = (currentMonth: number) => {
  const { data, ...queryRest } = useQuery([KEY.CALENDER], async () =>
    getCalendarList(currentMonth),
  );
  return { calendarList: data, ...queryRest };
};
