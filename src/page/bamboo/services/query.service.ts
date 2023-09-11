import { useInfiniteQuery, useQuery } from "react-query";
import { KEY } from "@/constants";
import IBambooPendingPost from "@/interfaces/bambooPendingPost.interface";
import { getBambooPendingPostList, getBambooPostList } from "./api.service";

export const useBambooListQuery = () => {
  const { data, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.BAMBOO],
    queryFn: ({ pageParam = 1 }) => getBambooPostList(pageParam),
    getNextPageParam: ({ nextPage }) => nextPage,
  });

  return { data: data?.pages, ...queryRest };
};

export const useBambooPendingListQuery = () => {
  const { data, ...queryRest } = useQuery<Array<IBambooPendingPost>>({
    queryKey: [KEY.BAMBOO_ADMIN],
    queryFn: getBambooPendingPostList,
  });

  return { data, ...queryRest };
};
