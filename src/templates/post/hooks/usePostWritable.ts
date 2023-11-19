import React from "react";
import {
  getS3ImageUrl,
  getFilteredPostDataByCategory,
  getPostIsValid,
} from "../helpers";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../services/post/mutation.service";
import { Post, PostData } from "../interfaces";
import { defaultPostData } from "../assets/data";
import { PostCategoryType } from "../types";

// edit과 write를 동시에 처리하는 훅
const usePostWritable = (defaultPostDataState?: Post) => {
  const [postData, setPostData] = React.useState<Post>(defaultPostData);
  const [lostImageUrl, setLostImageUrl] = React.useState();
  const { mutate: updatePostMutate } = useUpdatePostMutation();
  const { mutate: createPostMutate } = useCreatePostMutation();

  const handleCategoryChangeClick = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentChecked = e.target.id as PostCategoryType;
    setPostData({ ...postData, category: currentChecked });
  };

  const handleImageFileSelect = async (file?: File) => {
    setLostImageUrl(await getS3ImageUrl(file));
  };

  const handlePostWriteButtonClick = () => {
    if (getPostIsValid(postData)) {
      const createPost = getFilteredPostDataByCategory(postData);
      createPostMutate(createPost as PostData);
    }
  };

  const handlePostEditButtonClick = () => {
    if (getPostIsValid(postData)) {
      const updatePost = getFilteredPostDataByCategory(postData);
      updatePostMutate(updatePost as PostData);
    }
  };

  const handleInputPostDataChange = (
    eventOrContent?: React.ChangeEvent<HTMLInputElement> | string,
  ) => {
    const propsIsContent =
      typeof eventOrContent === "string" || !eventOrContent;

    if (propsIsContent) {
      setPostData((prev) => ({
        ...prev,
        content: eventOrContent || postData.content,
      }));
      return;
    }
    const { name, value } = eventOrContent.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  React.useEffect(() => {
    if (defaultPostDataState) setPostData(defaultPostDataState);
  }, [defaultPostDataState]);

  return {
    postData,
    lostImageUrl,
    handleCategoryChangeClick,
    handleImageFileSelect,
    handlePostEditButtonClick,
    handlePostWriteButtonClick,
    handleInputPostDataChange,
  };
};

export default usePostWritable;
