import { IPostQuery } from "@/interfaces";
import { GET_POST } from "@/gql/post/queries";
import { useQuery as useApolloQuery } from "@apollo/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { getPostCommentList } from "./api.service";

export const usePostQuery = ({ id }: IPostQuery) => {
  const { data, ...queryRest } = useApolloQuery(GET_POST({ id }), {
    variables: { id },
  });

  return { post: data?.readOne, ...queryRest };
};

interface IUseCommentListQueryProps {
  postId: string;
}

export const useCommentListQuery = ({
  postId: id,
}: IUseCommentListQueryProps) => {
  const { data, ...queryRest } = useInfiniteQuery({
    queryKey: [KEY.COMMENT],
    queryFn: ({ pageParam = 0 }) => getPostCommentList({ id, pageParam }),
    getNextPageParam: (lastPage) => {
      return lastPage.currentPage !== lastPage.totalPage - 1
        ? lastPage.currentPage + 1
        : undefined;
    },
  });
  return { data: data?.pages, ...queryRest };
};
