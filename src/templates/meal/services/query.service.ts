import { useQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getMealList } from "./api.service";

export const useMealQuery = (date: string) => {
  const { data, ...queryRest } = useQuery([KEY.MEAL], () => getMealList(date));
  return { data, ...queryRest };
};
