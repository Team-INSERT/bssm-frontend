import { useQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getMain } from "./api.service";

export const useMainQuery = () => {
  const { data, ...queryRest } = useQuery([KEY.MAIN], getMain);
  return { data, ...queryRest };
};
