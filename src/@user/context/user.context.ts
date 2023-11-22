import { atom } from "jotai";
import { User } from "../types";
import { defaultUserData } from "../assets/data";

const userContext = atom<User>(defaultUserData);

export default userContext;
