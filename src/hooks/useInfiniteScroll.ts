import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import React from "react";

const useInfiniteScroll = (
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult>,
) => {
  const isScroll = () => {
    const { scrollY } = window;
    const screenHeight = window.innerHeight;
    const bodyHeight = document.documentElement.offsetHeight;
    const scrollEnd = scrollY + screenHeight;
    const pos = scrollEnd + 2000;
    const isEnd = pos >= bodyHeight;
    if (isEnd) fetchNextPage();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => window.removeEventListener("scroll", isScroll);
  }, []);
};

export default useInfiniteScroll;
