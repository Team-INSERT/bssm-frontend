import { UPDATE_POST } from "@/_gql/post/queries";
import { useMutation } from "@apollo/client";

export const useUpdatePostMutation = () => {
  const mutations = useMutation(UPDATE_POST);
  return mutations;
};
