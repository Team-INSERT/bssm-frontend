import USER from "@/global/constants/user.constant";
import { Student } from "@/global/types/user.type";
import { atom } from "recoil";

export const emptyUser: Student = {
  isLogin: true,
  code: 0,
  nickname: "",
  email: "",
  level: 0,
  profile: "",
  role: USER.STUDENT,
  student: {
    name: "",
    enrolledAt: 0,
    grade: 0,
    classNo: 0,
    studentNo: 0,
  },
};

export const userStore = atom<Student>({
  key: "userStore",
  default: emptyUser,
});
