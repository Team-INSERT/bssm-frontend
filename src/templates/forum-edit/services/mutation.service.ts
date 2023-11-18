// import { UPDATE_POST } from "@/graphql/post/queries";
// import { useMutation } from "@apollo/client";

import { useMutation } from "@tanstack/react-query";

export const useUpdatePostMutation = () => {
  const mutations = useMutation({});
  return mutations;
};
