import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/constants";
import { color } from "@/styles";
import { IPost } from "@/interfaces";
import { post as emptyPost } from "@/fixture";
import PostBody from "./PostBody";
import PostHead from "./PostHead";
import { usePostQuery } from "../services/query.service";

interface IPostComponentPrpos {
  postType: string;
  id: number;
}

const Post = ({ postType, id }: IPostComponentPrpos) => {
  const [post, setPost] = React.useState<IPost>(emptyPost);
  const router = useRouter();
  const { post: data, isError, isSuccess } = usePostQuery({ postType, id });

  React.useEffect(() => {
    if (isError) router.push(ROUTER.NOTFOUND);
    if (data && isSuccess) return setPost(data);
    return setPost(emptyPost);
  }, [data, isSuccess, isError, router]);

  return (
    <Container>
      <PostHead postType={postType} post={post} />
      <PostBody {...post} />
    </Container>
  );
};

const Container = styled.div`
  width: 67%;
  border-radius: 4px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 22px 32px;
  gap: 4px;
`;

export default Post;
