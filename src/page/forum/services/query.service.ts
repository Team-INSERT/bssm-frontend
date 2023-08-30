import { useQuery } from "@apollo/client";
import { GET_POST_LIST } from "@/gql/post/queries";
import { PostCategoryType } from "@/types";

export const usePostListQuery = (type: PostCategoryType) => {
  const { data, ...queryRest } = useQuery(GET_POST_LIST({ type }), {
    variables: { type },
  });

  return { postList: data, ...queryRest };
};
