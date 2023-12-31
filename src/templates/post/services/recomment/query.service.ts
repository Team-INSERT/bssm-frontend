import { KEY } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecommentList } from "./api.service";

export const useRecommentListQuery = (id: number) => {
  const { data, hasNextPage, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.RECOMMENT, id],
    queryFn: ({ pageParam = 0 }) => getRecommentList({ id, pageParam }),
    getNextPageParam: ({ currentPage, totalPage }) => {
      if (currentPage !== totalPage) return currentPage + 1;
      return undefined;
    },
  });
  return { recommentList: data?.pages, ...queryRest };
};
