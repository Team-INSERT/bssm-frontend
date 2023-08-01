import { KEY } from "@/constants";
import { useQuery } from "react-query";
import { IPost, IPostQuery } from "@/interfaces";
import { getPostList } from "./api.service";

export const usePostListQuery = (postConfig: IPostQuery) => {
  return useQuery<IPost>([KEY.POST], async () => getPostList(postConfig));
};
