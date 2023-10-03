import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { color } from "@/styles";
import { IPost } from "@/interfaces";
import { post as emptyPost } from "@/fixture";
import PostBody from "./PostBody";
import PostHead from "./PostHead";
import { usePostQuery } from "../services/query.service";

interface IPostComponentPrpos {
  id: number;
}

const Post = ({ id }: IPostComponentPrpos) => {
  const [post, setPost] = React.useState<IPost>(emptyPost);
  const router = useRouter();
  const { post: data, error, loading } = usePostQuery({ id });

  React.useEffect(() => {
    if (data) return setPost(data);
    return setPost(emptyPost);
  }, [data, error, loading, router]);

  return (
    <Container>
      <PostHead postType={post.category} post={post} />
      <PostBody post={post} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 22px 32px;
  gap: 4px;
`;

export default Post;
