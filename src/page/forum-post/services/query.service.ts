import { IPostQuery } from "@/interfaces";
import { GET_POST } from "@/gql/post/queries";
import { useQuery } from "@apollo/client";

export const usePostQuery = ({ type, id }: IPostQuery) => {
  const { data, ...queryRest } = useQuery(GET_POST({ type, id }), {
    variables: { type, id },
  });

  return { post: data?.readOne, ...queryRest };
};
