import { KEY } from "@/_constants";
import { useQuery } from "@tanstack/react-query";
import { getMealList } from "./api.service";

interface IUseMealQueryProps {
  date: string;
}

export const useMealQuery = ({ date }: IUseMealQueryProps) => {
  const { data, ...queryRest } = useQuery([KEY.MEAL], () => getMealList(date));
  return { data, ...queryRest };
};
