import { KEY } from "@/constants";
import { useQuery } from "react-query";
import { IPostList, IPostQuery } from "@/interfaces";
import { getPostList } from "./api.service";

export const usePostListQuery = (postConfig: IPostQuery) => {
  const { postType, category } = postConfig;

  const { data, ...queryRest } = useQuery<IPostList>({
    queryKey: [KEY.POST, postType, category],
    queryFn: async () => getPostList(postConfig),
  });

  return { postList: data?.postList, ...queryRest };
};
