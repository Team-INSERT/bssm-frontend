import { toast } from "react-toastify";
import Swal from "sweetalert2";
import React from "react";
import useUser from "@/hooks/useUser";
import {
  useCreateRecommentMutation,
  useDeleteRecommentMutation,
  useUpdateRecommentMutation,
} from "../services/recomment/mutation.service";

const useRecomment = (id: number) => {
  const [recommentInput, setRecommentInput] = React.useState("");
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isDetailMode, setIsDetailMode] = React.useState(false);
  const { user } = useUser();

  const { mutate: createRecommentMutate } = useCreateRecommentMutation();
  const { mutate: updateRecommentMutate } = useUpdateRecommentMutation();
  const { mutate: deleteRecommentMutate } = useDeleteRecommentMutation();

  const isRecommentWriterSameAsUser = (recommentUserId: number) => {
    return user.id === recommentUserId;
  };

  const handleEditModeChange = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDetailModeChange = () => {
    setIsDetailMode(!isDetailMode);
  };

  const handleRecommentInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setRecommentInput(e.target.value);
  };

  const handleCreateRecommentClick = () => {
    if (!recommentInput.trim()) return toast.error("내용을 입력해주세요!");
    createRecommentMutate({ id, detail: recommentInput });
  };

  const handleUpdateRecommentDetailClick = () => {
    if (!recommentInput.trim()) return toast.error("내용을 입력해주세요.");
    updateRecommentMutate({ id, detail: recommentInput });
    setIsEditMode(false);
  };

  const handleDeleteRecommentDetailClick = async () => {
    const { isConfirmed } = await Swal.fire({
      title: "게시글 삭제",
      text: "해당 게시글을 삭제할까요?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
    });
    if (isConfirmed) deleteRecommentMutate(id);
  };

  return {
    isEditMode,
    isDetailMode,
    recommentInput,
    setRecommentInput,
    isRecommentWriterSameAsUser,
    handleEditModeChange,
    handleDetailModeChange,
    handleRecommentInputChange,
    handleCreateRecommentClick,
    handleUpdateRecommentDetailClick,
    handleDeleteRecommentDetailClick,
  };
};

export default useRecomment;
