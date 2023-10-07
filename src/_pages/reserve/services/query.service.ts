import { KEY } from "@/_constants";
import { useQuery } from "@tanstack/react-query";
import { getReserveList } from "./api.service";

interface IUseReserveListQueryProps {
  date: string;
}

export const useReserveListQuery = ({ date }: IUseReserveListQueryProps) => {
  const { data, ...queryRest } = useQuery([KEY.RESERVE], async () =>
    getReserveList(date),
  );
  return { data, ...queryRest };
};
