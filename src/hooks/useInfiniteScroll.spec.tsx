import { fireEvent, renderHook } from "@testing-library/react";
import useInfiniteScroll from "./useInfiniteScroll";

describe("useInfiniteScroll", () => {
  it("스크롤을 끝까지 내렸을 때 fetchNextPage 호출 확인", () => {
    const fetchNextPage = jest.fn();
    renderHook(() => useInfiniteScroll(fetchNextPage));

    Object.defineProperty(window, "scrollY", {
      value: 0,
    });
    Object.defineProperty(document.documentElement, "offsetHeight", {
      value: 3000,
    });

    window.scrollY = 3000;

    fireEvent.scroll(window);
    expect(fetchNextPage).toHaveBeenCalled();
  });
});
