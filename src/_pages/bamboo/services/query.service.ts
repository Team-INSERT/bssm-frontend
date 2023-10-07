import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { KEY } from "@/_constants";
import IBambooPendingPost from "@/_interfaces/bambooPendingPost.interface";
import { getBambooPendingPostList, getBambooPostList } from "./api.service";

export const useBambooListQuery = () => {
  const { data, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.BAMBOO],
    queryFn: ({ pageParam = 0 }) => getBambooPostList(pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.number !== lastPage.totalPages - 1
        ? lastPage.number + 1
        : undefined;
    },
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
