import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getBambooPendingPostList, getBambooPostList } from "./api.service";
import { BambooPendingPost } from "../types";

export const useBambooListQuery = () => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.BAMBOO],
    queryFn: ({ pageParam = 0 }) => getBambooPostList(pageParam),
    getNextPageParam: ({ number, totalPages }) => {
      if (number !== totalPages - 1) return number + 1;
      return undefined;
    },
  });

  return {
    bambooList: data?.pages,
    ...queryRest,
  };
};

export const useBambooPendingListQuery = () => {
  const { data, ...queryRest } = useQuery<Array<BambooPendingPost>>({
    queryKey: [KEY.BAMBOO_ADMIN],
    queryFn: getBambooPendingPostList,
  });

  return { bambooList: data, ...queryRest };
};
