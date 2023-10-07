import { useApolloClient } from "@apollo/client";
import { GET_POST_LIST } from "@/_gql/post/queries";
import { PostCategoryType } from "@/_types";
import { KEY } from "@/_constants";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IPostInfiniteList } from "@/_interfaces";
import getPageSize from "@/_helpers/getPageSize.helper";

interface IUsePostListQueryProps {
  category: PostCategoryType;
}

export const usePostListQuery = ({ category }: IUsePostListQueryProps) => {
  const apolloClient = useApolloClient();
  const PAGE_SIZE = getPageSize();

  const getPostList = async (page: number) => {
    const { data } = await apolloClient.query({
      query: GET_POST_LIST({
        type: category,
        page,
        size: PAGE_SIZE,
      }),
      variables: {
        type: category,
        page,
      },
    });
    return data.readByCategory;
  };

  return useInfiniteQuery<IPostInfiniteList>(
    [KEY.POST, category],
    ({ pageParam = 0 }) => getPostList(pageParam),
    {
      getNextPageParam: ({ currentPage, totalPage }) =>
        currentPage !== totalPage ? currentPage + 1 : undefined,
    },
  );
};
