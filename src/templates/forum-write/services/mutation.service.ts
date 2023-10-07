import { CREATE_POST } from "@/graphql/post/queries";
import { useMutation } from "@apollo/client";

export const useCreatePostMutation = () => {
  const mutations = useMutation(CREATE_POST);
  return mutations;
};
