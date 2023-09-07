import { useQuery } from "react-query";
import { KEY } from "@/constants";
import { IBambooPost } from "@/interfaces";
import IBambooPendingPost from "@/interfaces/bambooPendingPost.interface";
import { getBambooPendingPostList, getBambooPostList } from "./api.service";

export const useBambooListQuery = () => {
  const { data, ...queryRest } = useQuery<Array<IBambooPost>>({
    queryKey: [KEY.BAMBOO],
    queryFn: getBambooPostList,
  });

  return { bamboos: data, ...queryRest };
};

export const useBambooPendingListQuery = () => {
  const { data, ...queryRest } = useQuery<Array<IBambooPendingPost>>({
    queryKey: [KEY.BAMBOO_ADMIN],
    queryFn: getBambooPendingPostList,
  });

  return { bamboos: data, ...queryRest };
};
