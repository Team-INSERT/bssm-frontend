import React from "react";
import { UseLikeProps } from "../types/@props";
import {
  useUpdateCommentLikeMutation,
  useUpdatePostLikeMutation,
  useUpdateRecommentLikeMutation,
} from "../services/like/mutation.service";

const useLike = ({ likeCount, doesLike }: UseLikeProps) => {
  const { mutate: updatePostLikeMutate } = useUpdatePostLikeMutation();
  const { mutate: updateCommentLikeMutate } = useUpdateCommentLikeMutation();
  const { mutate: updateRecommentLikeMutate } =
    useUpdateRecommentLikeMutation();
  const [currentLikeCount, setCurrentLikeCount] = React.useState(likeCount);
  const [isLike, setIsLike] = React.useState(false);

  const handleChangeLikeState = () => {
    setIsLike(!isLike);
    if (isLike) return setCurrentLikeCount(currentLikeCount - 1);
    setCurrentLikeCount(currentLikeCount + 1);
  };

  const handleUpdatePostLikeButtonClick = async (id: string) => {
    updatePostLikeMutate(id);
    handleChangeLikeState();
  };

  const handleUpdateCommentLikeButtonClick = async (id: number) => {
    updateCommentLikeMutate(`${id}`);
    handleChangeLikeState();
  };

  const handleUpdateRecommentLikeButtonClick = async (id: number) => {
    updateRecommentLikeMutate(`${id}`);
    handleChangeLikeState();
  };

  React.useEffect(() => {
    setIsLike(doesLike);
  }, [doesLike]);

  React.useEffect(() => {
    setCurrentLikeCount(likeCount);
  }, [likeCount]);

  return {
    currentLikeCount,
    isLike,
    handleUpdatePostLikeButtonClick,
    handleUpdateCommentLikeButtonClick,
    handleUpdateRecommentLikeButtonClick,
  };
};

export default useLike;
