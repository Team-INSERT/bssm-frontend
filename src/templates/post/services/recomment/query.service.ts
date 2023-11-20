import KEY from "@/constants/key.constant";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecommentList } from "./api.service";

export const useRecommentListQuery = (id: number) => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.RECOMMENT],
    queryFn: ({ pageParam = 0 }) => getRecommentList({ id, pageParam }),
    getNextPageParam: ({ currentPage, totalPage }) => {
      if (currentPage !== totalPage) return currentPage + 1;
      return undefined;
    },
  });
  const dataLength = data?.pages.flatMap((item) => item.data).length || 0;
  const hasMore = hasNextPage || false;

  return { recommentList: data?.pages, dataLength, hasMore, ...queryRest };
};
