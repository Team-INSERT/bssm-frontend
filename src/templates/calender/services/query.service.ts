import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getCalenderList } from "./api.service";

export const useCalenderListQuery = (currentMonth: number) => {
  const { data, ...queryRest } = useQuery([KEY.CALENDER], async () =>
    getCalenderList(currentMonth),
  );
  return { calenderList: data, ...queryRest };
};
