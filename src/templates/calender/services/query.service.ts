import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getCalenderList } from "./api.service";

interface IUseCalenderListQueryProps {
  currentMonth: number;
}

export const useCalenderListQuery = ({
  currentMonth,
}: IUseCalenderListQueryProps) => {
  const { data, ...queryRest } = useQuery([KEY.CALENDER], async () =>
    getCalenderList(currentMonth),
  );
  return { data, ...queryRest };
};
