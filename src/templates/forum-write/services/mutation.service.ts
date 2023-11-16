// import { CREATE_POST } from "@/graphql/post/queries";
// import { useMutation } from "@apollo/client";

import { useMutation } from "@tanstack/react-query";

export const useCreatePostMutation = () => {
  const mutations = useMutation({});
  return mutations;
};
