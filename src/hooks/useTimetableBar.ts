import React from "react";
import useDate from "@/hooks/useDate";
import useWindow from "./useWindow";

const useTimetableBar = () => {
  const date = useDate();
  const [nowDate, setNowDate] = React.useState("");
  const [isScrollBox, setIsScrollBox] = React.useState(false);
  const { isWindow } = useWindow();

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const intervalRef = React.useRef<number | null>(null);

  const 현재시간과동기화 = () => {
    const HMSDate = date.getHMSDate();
    setNowDate(HMSDate);
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const classProgress = date.getDiffTimeProgress() * scrollWidth;
      scrollRef.current.scrollLeft = classProgress;
    }
  };

  const handleTimetableBarScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const classProgress = date.getDiffTimeProgress() * scrollWidth;

      const 사용자가스크롤했다면 =
        Math.abs(classProgress - scrollRef.current.scrollLeft) > 1;
      if (사용자가스크롤했다면) setIsScrollBox(true);
    }
  };

  const synchronizeCurrentTime = () => {
    if (intervalRef.current && isScrollBox) return;
    if (isWindow)
      intervalRef.current = window.setInterval(현재시간과동기화, 1000);
  };

  const handleTimetableButtonClick = () => {
    synchronizeCurrentTime();
    setIsScrollBox(false);
  };

  React.useEffect(() => {
    if (isScrollBox && isWindow) {
      window.clearInterval(intervalRef.current as number);
      intervalRef.current = null;
    }
  }, [isScrollBox]);

  React.useEffect(() => {
    synchronizeCurrentTime();
    return () => {
      clearInterval(intervalRef.current as number);
    };
    // eslint-disable-next-line
  }, []);

  return {
    scrollRef,
    isScrollBox,
    nowDate,
    handleTimetableBarScroll,
    handleTimetableButtonClick,
  };
};

export default useTimetableBar;
