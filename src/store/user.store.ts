import { IUser } from "@/interfaces";
import { atom } from "recoil";

export const emptyUser: IUser = {
  isLogin: false,
  id: 0,
  nickname: "",
  email: "",
  name: "",
  profile_url: "",
  profile_image: "",
  authority: "",
  role: "",
  enroll: 0,
  grade: 0,
  classNum: 0,
  studentNumber: 0,
};

export const userStore = atom<IUser>({
  key: "userStore",
  default: emptyUser,
});
