// import { IPostQuery } from "@/interfaces";
// import { GET_POST } from "@/graphql/post/queries";
// import { useQuery as useApolloQuery } from "@apollo/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getPostCommentList, getRecommentList } from "./api.service";

export const usePostQuery = (/* { id }: IPostQuery */) => {
  // const { data, ...queryRest } = useApolloQuery(GET_POST({ id }), {
  //   variables: { id },
  // });
  // return { post: data?.readOne, ...queryRest };
};

interface IUseCommentListQueryProps {
  postId: string;
}

interface IUseRecommentQueryProps {
  commentId: number;
}

export const useCommentListQuery = ({
  postId: id,
}: IUseCommentListQueryProps) => {
  const { data, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.COMMENT],
    queryFn: ({ pageParam = 0 }) => getPostCommentList({ id, pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage !== lastPage.totalPage
        ? lastPage.currentPage + 1
        : undefined;
    },
  });
  return { data: data?.pages, ...queryRest };
};

export const useRecommentListQuery = ({
  commentId: id,
}: IUseRecommentQueryProps) => {
  const { data, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.RECOMMENT],
    queryFn: ({ pageParam = 0 }) => getRecommentList({ id, pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage !== lastPage.totalPage
        ? lastPage.currentPage + 1
        : undefined;
    },
  });
  return { data: data?.pages, ...queryRest };
};
