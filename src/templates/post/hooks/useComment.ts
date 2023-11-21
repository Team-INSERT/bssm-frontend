import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useUser } from "@/@user/hooks";
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from "../services/comment/mutation.service";

const useComment = (id: number) => {
  const { user } = useUser();
  const [commentInput, setCommentInput] = React.useState("");
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isDetailMode, setIsDetailMode] = React.useState(false);
  const [isRecommentWriteMode, setIsRecommentWriteMode] = React.useState(false);
  const [isViewRecommentMode, setIsViewRecommentMode] = React.useState(false);

  const { mutate: createCommentMutate } = useCreateCommentMutation();
  const { mutate: updateCommentMutate } = useUpdateCommentMutation();
  const { mutate: deleteCommentMutate } = useDeleteCommentMutation();

  const isCommentWriterSameAsUser = (commentUserId: number) => {
    return user.id === commentUserId;
  };

  const handleEditModeChange = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDetailModeChange = () => {
    setIsDetailMode(!isDetailMode);
  };

  const handleRecommentWriteModeChange = () => {
    setIsRecommentWriteMode(!isRecommentWriteMode);
  };

  const handleViewRecommentModeChange = () => {
    setIsViewRecommentMode(!isViewRecommentMode);
  };

  const handleCommentInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCommentInput(e.target.value);
  };

  const handleCreateCommentClick = async () => {
    if (!commentInput.trim()) return toast.error("내용을 입력해주세요.");
    createCommentMutate({ id, detail: commentInput });
    setCommentInput("");
  };

  const handleUpdateCommentDetailClick = () => {
    if (!commentInput.trim()) return toast.error("내용을 입력해주세요.");
    updateCommentMutate({ id, detail: commentInput });
    setIsEditMode(false);
  };

  const handleDeleteCommentDetailClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "게시글 삭제",
      text: "해당 게시글을 삭제할까요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });
    if (isConfirmed) deleteCommentMutate(id);
  };

  return {
    commentInput,
    isEditMode,
    isDetailMode,
    isRecommentWriteMode,
    isViewRecommentMode,
    setCommentInput,
    isCommentWriterSameAsUser,
    handleEditModeChange,
    handleDetailModeChange,
    handleRecommentWriteModeChange,
    handleViewRecommentModeChange,
    handleCommentInputChange,
    handleCreateCommentClick,
    handleUpdateCommentDetailClick,
    handleDeleteCommentDetailClick,
  };
};

export default useComment;
