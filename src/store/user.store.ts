import USER from "@/global/constants/user.constant";
import { Student } from "@/global/types/user.type";
import { atom } from "recoil";

export const emptyUser: Student = {
  isLogin: true,
  code: -1,
  nickname: "",
  email: "",
  level: -1,
  profile: "",
  role: USER.STUDENT,
  student: {
    name: "",
    enrolledAt: -1,
    grade: -1,
    classNo: -1,
    studentNo: -1,
  },
};

export const userStore = atom<Student>({
  key: "userStore",
  default: emptyUser,
});
