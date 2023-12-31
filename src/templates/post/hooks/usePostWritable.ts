import React from "react";
import { useAtom } from "jotai";
import { useImageUpload } from "@/hooks";
import { useUser } from "@/@user/hooks";
import { getFilteredPostDataByCategory, getPostIsValid } from "../helpers";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../services/post/mutation.service";
import { Post, PostCategoryType, PostData } from "../types";
import { defaultPostData } from "../assets/data";
import { currentCategoryContext } from "../context";

// edit과 write를 동시에 처리하는 훅
const usePostWritable = (defaultPostDataState?: Post) => {
  const { isAdmin } = useUser();
  const [currentCategory] = useAtom(currentCategoryContext);

  const is유저가공지사항접근 = !isAdmin && currentCategory === "NOTICE";

  const [postData, setPostData] = React.useState<Post>({
    ...defaultPostData,
    category: is유저가공지사항접근 ? "COMMON" : currentCategory,
  });
  const [lostImageUrl, setLostImageUrl] = React.useState();
  const { mutate: updatePostMutate } = useUpdatePostMutation();
  const { mutate: createPostMutate } = useCreatePostMutation();
  const { uploadImage } = useImageUpload();

  const handleCategoryChangeClick = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const currentChecked = e.target.id as PostCategoryType;
    setPostData({ ...postData, category: currentChecked });
  };

  const handleImageFileSelect = async (file?: File) => {
    const files = await uploadImage(file);
    setLostImageUrl(files);
    setPostData({
      ...postData,
      lostThingImage: files,
    });
  };

  const handlePostWriteButtonClick = () => {
    if (getPostIsValid(postData)) {
      const createPost = getFilteredPostDataByCategory(postData);
      createPostMutate(createPost as PostData);
    }
  };

  const handlePostEditButtonClick = (id: number) => {
    const updatePost = getFilteredPostDataByCategory(postData);
    if (getPostIsValid(postData)) {
      updatePostMutate({ ...updatePost, id: `${id}` } as PostData);
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
