import { ROUTER } from "@/constants";
import { DELETE_POST } from "@/gql/post/queries";
import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useDeletePostMutation = () => {
  const apolloClient = useApolloClient();
  const router = useRouter();

  const mutations = useMutation(DELETE_POST, {
    onCompleted: () => {
      apolloClient.cache.reset();
      toast.success("글이 삭제되었습니다!");
      router.push(ROUTER.POST.LIST);
    },
  });
  return mutations;
};
