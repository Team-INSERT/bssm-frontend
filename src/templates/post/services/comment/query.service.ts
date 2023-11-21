import { useInfiniteQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getCommentList } from "./api.service";

export const useCommentListQuery = (id: number) => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.COMMENT, id],
    queryFn: ({ pageParam = 0 }) => getCommentList({ id, pageParam }),
    getNextPageParam: ({ currentPage, totalPage }) => {
      if (currentPage !== totalPage) return currentPage + 1;
      return undefined;
    },
  });

  return { commentList: data?.pages, ...queryRest };
};
