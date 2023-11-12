import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import IBambooPendingPost from "@/interfaces/bambooPendingPost.interface";
import { getBambooPendingPostList, getBambooPostList } from "./api.service";

export const useBambooListQuery = () => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.BAMBOO],
    queryFn: ({ pageParam = 0 }) => getBambooPostList(pageParam),
    getNextPageParam: ({ number, totalPages }) => {
      if (number !== totalPages - 1) return number + 1;
      return undefined;
    },
  });
  const dataLength = data?.pages.flatMap((item) => item.data).length || 0;
  const hasMore = hasNextPage || false;

  return { bambooList: data?.pages, dataLength, hasMore, ...queryRest };
};

export const useBambooPendingListQuery = () => {
  const { data, ...queryRest } = useQuery<Array<IBambooPendingPost>>({
    queryKey: [KEY.BAMBOO_ADMIN],
    queryFn: getBambooPendingPostList,
  });

  return { bambooList: data, ...queryRest };
};
