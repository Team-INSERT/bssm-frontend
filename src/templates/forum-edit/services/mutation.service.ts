import { UPDATE_POST } from "@/graphql/post/queries";
import { useMutation } from "@apollo/client";

export const useUpdatePostMutation = () => {
  const mutations = useMutation(UPDATE_POST);
  return mutations;
};
