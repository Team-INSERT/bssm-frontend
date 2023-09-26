import { IPostQuery } from "@/interfaces";
import { GET_POST } from "@/gql/post/queries";
import { useQuery } from "@apollo/client";

export const usePostQuery = ({ id }: IPostQuery) => {
  const { data, ...queryRest } = useQuery(GET_POST({ id }), {
    variables: { id },
  });

  return { post: data?.readOne, ...queryRest };
};
