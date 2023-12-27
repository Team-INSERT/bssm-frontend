import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import React from "react";
import Swal from "sweetalert2";
import { useAtom } from "jotai";
import { useUser } from "@/@user/hooks";
import { KEY, ROUTER } from "@/constants";
import { defaultPostData } from "../assets/data";
import { useDeletePostMutation } from "../services/post/mutation.service";
import { Post, PostCategoryType } from "../types";
import { currentCategoryContext } from "../context";

const usePost = (defaultPostDataState?: Post) => {
  const [postData, setPostData] = React.useState<Post>(defaultPostData);
  const [currentCategory, setCurrentCategory] = useAtom(currentCategoryContext);
  const { mutate: deletePostMutate } = useDeletePostMutation();
  const { user } = useUser();

  const isPostWriterSameAsUser = postData.user.id === user.id;
  const queryClient = useQueryClient();
  const router = useRouter();

  const formatPostCreatedDate = (date: string) => {
    return dayjs(date).format("YYYY.MM.DD.");
  };

  const handleWriteButtonClick = () => {
    router.push(ROUTER.POST.WRITE);
  };

  const handleUpdateButtonClick = () => {
    router.push(`${ROUTER.POST.DETAIL}/${postData.id}/${ROUTER.POST.UPDATE}`);
  };

  const handleDeleteButtonClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "게시글 삭제",
      text: "해당 게시글을 삭제할까요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });
    if (isConfirmed) deletePostMutate(+postData.id);
  };

  const handleCheckCategoryClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCategory(e.target.id as PostCategoryType);
  };

  React.useEffect(() => {
    queryClient.invalidateQueries([KEY.POST, currentCategory]);
  }, [currentCategory, queryClient]);

  React.useEffect(() => {
    if (defaultPostDataState) setPostData(defaultPostDataState);
  }, [defaultPostDataState]);

  return {
    postData,
    currentCategory,
    isPostWriterSameAsUser,
    handleUpdateButtonClick,
    handleDeleteButtonClick,
    formatPostCreatedDate,
    handleWriteButtonClick,
    handleCheckCategoryClick,
  };
};

export default usePost;
