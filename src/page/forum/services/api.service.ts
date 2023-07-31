import httpClient from "@/apis/httpClient";
import IPostQuery from "@/global/types/postQuery.type";

export const getPostList = async (postConfig: IPostQuery) => {
  try {
    const { data } = await httpClient.post.getPost({
      params: postConfig,
    });
    return data;
  } catch (err) {
    return err;
  }
};
