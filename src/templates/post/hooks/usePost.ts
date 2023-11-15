import { KEY, ROUTER } from "@/constants";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import React from "react";
import { CATEGORY } from "../constants";
import { PostCategoryType } from "../types";

const usePost = () => {
  const [currentCategory, setCurrentCategory] =
    React.useState<PostCategoryType>(CATEGORY.COMMON);

  const queryClient = useQueryClient();
  const router = useRouter();

  const formatPostCreatedDate = (date: string) => {
    return dayjs(date).format("YYYY.MM.DD.");
  };

  const handleWriteButtonClick = () => {
    router.push(ROUTER.POST.WRITE);
  };

  const handleCheckCategoryClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCategory(e.target.id as PostCategoryType);
  };

  React.useEffect(() => {
    queryClient.invalidateQueries([KEY.POST, currentCategory]);
  }, [currentCategory, queryClient]);

  return {
    currentCategory,
    formatPostCreatedDate,
    handleWriteButtonClick,
    handleCheckCategoryClick,
  };
};

export default usePost;
