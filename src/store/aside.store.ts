import { IAside } from "@/interfaces";
import { atom } from "recoil";

export const asideStore = atom<IAside>({
  key: "asideStore",
  default: {
    score: 0,
    positivePoint: 0,
    negativePoint: 0,
    ranking: 0,
    room: {
      roomNumber: 0,
      yearSemester: {
        year: 0,
        semester: 0,
      },
      dormitoryType: "",
    },
    isCheckIn: false,
  },
});
