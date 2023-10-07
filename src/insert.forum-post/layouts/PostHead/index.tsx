import styled from "styled-components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { ROUTER } from "@/_constants";
import { Row } from "@/_components/Flex";
import { color, flex, font } from "@/_styles";
import { IPost } from "@/_interfaces";
import useUser from "@/_hooks/useUser";
import { PostCategoryType } from "@/_types";
import Category from "./Category";
import PostTitle from "./PostTitle";
import ReactBox from "./ReactBox";
import { useDeletePostMutation } from "../../services/mutation.service";

interface IPostHeadProps {
  postType: PostCategoryType;
  post: IPost;
}

const PostHead = ({ post, postType }: IPostHeadProps) => {
  const { user } = useUser();
  const [mutate] = useDeletePostMutation();
  const router = useRouter();

  const handlePostUpdateButtonClick = () => {
    router.push(`${ROUTER.POST.LIST}/${post.id}/${ROUTER.POST.UPDATE}`);
  };

  const handlePostDeleteButtonClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "게시글 삭제",
      text: "해당 게시글을 삭제할까요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });

    if (isConfirmed) await mutate({ variables: { id: parseInt(post.id, 10) } });
  };

  return (
    <Container>
      <Row>
        <Category postType={postType} />
        {post.user.id === user.id && (
          <PostButtonBox>
            <PostUpdateButton onClick={handlePostUpdateButtonClick} />
            <PostDeleteButton onClick={handlePostDeleteButtonClick} />
          </PostButtonBox>
        )}
      </Row>
      <ResponsivePostButtonBox>
        <PostUpdateButton onClick={handlePostUpdateButtonClick} />
        <PostDeleteButton onClick={handlePostDeleteButtonClick} />
      </ResponsivePostButtonBox>
      <PostTitle {...post} />
      <ReactBox {...post} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PostButtonBox = styled.div`
  margin-left: auto;
  ${flex.CENTER};
  gap: 8px;

  @media screen and (max-width: 541px) {
    display: none;
  }
`;

const ResponsivePostButtonBox = styled(PostButtonBox)`
  margin: 0 auto 0 0;
  display: none;

  @media screen and (max-width: 541px) {
    display: flex;
  }
`;

const PostDeleteButton = styled.button`
  padding: 4px 14px;
  border-radius: 4px;
  background-color: ${color.primary_red};
  color: ${color.white};
  ${font.caption};

  &:after {
    content: "글삭제";
  }
`;

const PostUpdateButton = styled(PostDeleteButton)`
  background-color: ${color.primary_blue};

  &:after {
    content: "글수정";
  }
`;

export default PostHead;
