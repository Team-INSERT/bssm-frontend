import { useInfiniteQuery } from "@tanstack/react-query";
import KEY from "@/constants/key.constant";
import { getCommentList } from "./api.service";

export const useCommentListQuery = (id: number) => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.COMMENT],
    queryFn: ({ pageParam = 0 }) => getCommentList({ id, pageParam }),
    getNextPageParam: ({ currentPage, totalPage }) => {
      if (currentPage !== totalPage) return currentPage + 1;
      return undefined;
    },
  });
  const dataLength = data?.pages.flatMap((item) => item.data).length || 0;
  const hasMore = hasNextPage || false;

  return { commentList: data?.pages, dataLength, hasMore, ...queryRest };
};
