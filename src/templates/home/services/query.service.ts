import { KEY } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { getMain } from "./api.service";

export const useMainQuery = () => {
  const { data, ...queryRest } = useQuery([KEY.MAIN], getMain);
  return { data, ...queryRest };
};
