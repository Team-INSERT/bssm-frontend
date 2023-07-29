import emojiStore from "@/store/emoji.store";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

const useEmoji = () => {
  const [emoji, setEmoji] = useRecoilState(emojiStore);

  const openEmoji = useCallback(() => {
    setEmoji({ visible: true });
  }, [setEmoji]);

  const closeEmoji = useCallback(() => {
    setEmoji({ visible: false });
  }, [setEmoji]);

  return { openEmoji, closeEmoji, visible: emoji.visible };
};

export default useEmoji;
