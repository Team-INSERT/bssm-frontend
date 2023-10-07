import { GET_UPDATE_POST } from "@/_gql/post/queries";
import { useQuery } from "@apollo/client";

interface IUseUpdatePostQueryProps {
  id: number;
}

export const useUpdatePostQuery = ({ id }: IUseUpdatePostQueryProps) => {
  const { data, ...queryRest } = useQuery(GET_UPDATE_POST({ id }), {
    variables: { id },
  });

  return { post: data?.readOne, ...queryRest };
};
