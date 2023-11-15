import { KEY } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPostList } from "./api.service";
import { PostCategoryType } from "../types";

export const usePostListQuery = (category: PostCategoryType) => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery(
    [KEY.POST, category],
    ({ pageParam = 0 }) => getPostList({ category, page: pageParam }),
    {
      getNextPageParam: ({ currentPage, totalPage }) =>
        currentPage !== totalPage ? currentPage + 1 : undefined,
    },
  );
  const dataLength = data?.pages.flatMap((item) => item.entity).length || 0;
  const hasMore = hasNextPage || false;

  return { postList: data?.pages, dataLength, hasMore, ...queryRest };
};
