import React from "react";
import { emptyClassInfo } from "@/assets/data";
import useDate from "@/hooks/useDate";

const useTimetableBar = () => {
  const date = useDate();
  const [nowDate, setNowDate] = React.useState("");
  const [currentClass, setCurrentClass] = React.useState(emptyClassInfo);
  const [isScrollBox, setIsScrollBox] = React.useState(false);

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const intervalRef = React.useRef<number | null>(null);

  const 현재시간과동기화 = () => {
    const HMSDate = date.getHMSDate();
    setNowDate(HMSDate);

    const classProgress = date.getDiffTimeProgress(currentClass);

    if (scrollRef.current) scrollRef.current.scrollLeft = classProgress;
  };

  const handleTimetableBarScroll = () => {
    const classProgress = date.getDiffTimeProgress(currentClass);

    if (scrollRef.current) {
      const 사용자가스크롤했다면 =
        classProgress - scrollRef.current.scrollLeft > 1;

      if (사용자가스크롤했다면 && intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        setIsScrollBox(true);
        intervalRef.current = null;
      }
    }
  };

  const synchronizeCurrentTime = () => {
    intervalRef.current = window.setInterval(현재시간과동기화, 1000);
  };

  const handleTimetableButtonClick = () => {
    synchronizeCurrentTime();
    setIsScrollBox(false);
  };

  React.useEffect(() => {
    synchronizeCurrentTime();
  }, []);

  // React.useEffect(() => {
  //   const timetable = dayTimeTable[weekday];
  //   const [nowDateClass] = timetable.filter((item) => item.isNow);
  //   setCurrentClass(nowDateClass);
  // }, [weekday, dayTimeTable]);

  return {
    scrollRef,
    isScrollBox,
    nowDate,
    handleTimetableBarScroll,
    handleTimetableButtonClick,
  };
};

export default useTimetableBar;
