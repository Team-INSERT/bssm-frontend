import dayjs from "dayjs";
import React from "react";
import { toast } from "react-toastify";
import { useModal } from "@/@modal/hooks";
import { useUser } from "@/@user/hooks";
import { DATE } from "@/constants";
import {
  useAddCalendarPlanMutation,
  useDeleteCalendarPlanMutation,
} from "../services/mutation.service";
import { getPlanTypeByPlanName } from "../helpers";
import CalendarPlanAddModal from "../layouts/CalendarPlanAddModal";
import { CalendarPlanAddQuery } from "../types/@props";

const useCalendar = () => {
  const [currentMonth, setCurrentMonth] = React.useState(dayjs().month());
  const { openModal } = useModal();
  const { user } = useUser();
  const { mutate: deleteMutate } = useDeleteCalendarPlanMutation();
  const { mutate: addPlanMutate } = useAddCalendarPlanMutation();

  const handleOpenModalClick = (date?: string) => {
    if (date) {
      openModal({
        component: <CalendarPlanAddModal date={date} />,
      });
    }
  };

  const handlePlanAddButtonClick = ({
    title,
    date,
    planType,
  }: CalendarPlanAddQuery) => {
    if (!title.trim()) return toast.error("내용을 입력해주세요!");
    const { grade, classNum: classNumber } = user;
    const planQuery = {
      title,
      date,
      type: getPlanTypeByPlanName(planType),
      priority: 0,
      color: "#000",
      grade,
      classNumber,
    };
    addPlanMutate(planQuery);
  };

  const handleDeleteCalendarPlanClick = (id: number) => {
    deleteMutate(id);
  };

  const handleCalendarMonthChange = (month: "INCREASE" | "DECREASE") => {
    if (month === DATE.INCREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 12 ? prevMon + 1 : prevMon));
    }
    if (month === DATE.DECREASE) {
      setCurrentMonth((prevMon) => (prevMon !== 1 ? prevMon - 1 : prevMon));
    }
  };

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleCalendarMonthChange(DATE.DECREASE);
      if (e.key === "ArrowRight") handleCalendarMonthChange(DATE.INCREASE);
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => window.removeEventListener("keydown", handleSetDateKeyDown);
  }, []);

  return {
    currentMonth,
    handleOpenModalClick,
    handlePlanAddButtonClick,
    handleDeleteCalendarPlanClick,
    handleCalendarMonthChange,
  };
};

export default useCalendar;
