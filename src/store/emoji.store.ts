import { IEmojiState } from "@/interfaces";
import { atom } from "recoil";

const emojiStore = atom<IEmojiState>({
  key: "emojiStore",
  default: {
    visible: false,
  },
});

export default emojiStore;
