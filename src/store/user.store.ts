import { USER } from "@/constants";
import { IUser } from "@/interfaces";
import { atom } from "recoil";

export const emptyUser: IUser = {
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

export const userStore = atom<IUser>({
  key: "userStore",
  default: emptyUser,
});
