import { DocumentNode, QueryHookOptions, useQuery } from "@apollo/client";

interface IUseApolloQueryProps {
  query: DocumentNode;
  options?: QueryHookOptions;
}

const useApolloQuery = ({ query, options }: IUseApolloQueryProps) => {
  const { data, ...queryRest } = useQuery(query, options);

  return { data, ...queryRest };
};

export default useApolloQuery;
