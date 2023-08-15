import { KEY } from "@/constants";
import { useQuery } from "react-query";
import { IPost, IPostQuery } from "@/interfaces";
import { getComment, getPost } from "./api.service";

export const usePostQuery = (postConfig: IPostQuery) => {
  const { postType, id } = postConfig;

  const { data, ...queryRest } = useQuery<IPost>({
    queryKey: [KEY.POST, postType, id],
    queryFn: async () => getPost(postConfig),
  });

  return { post: data, ...queryRest };
};

export const useCommentQuery = (commentConfig: IPostQuery) => {
  const { postType, id } = commentConfig;

  const { data, ...queryRest } = useQuery<IComment>({
    queryKey: [KEY.COMMENT, postType, id],
    queryFn: async () => getComment(commentConfig),
  });
};
