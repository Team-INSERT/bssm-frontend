import KEY from "@/global/constants/key.constant";
import IPost from "@/global/types/post.type";
import { useQuery } from "react-query";
import IPostQuery from "@/global/types/postQuery.type";
import { getPostList } from "./api.service";

export const usePostListQuery = (postConfig: IPostQuery) => {
  return useQuery<IPost>([KEY.POST], async () => getPostList(postConfig));
};
