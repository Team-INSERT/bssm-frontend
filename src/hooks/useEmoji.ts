import React from "react";
import { useRecoilState } from "recoil";
import emojiStore from "@/store/emoji.store";

const useEmoji = () => {
  const [emoji, setEmoji] = useRecoilState(emojiStore);

  const openEmoji = React.useCallback(() => {
    setEmoji({ visible: true });
  }, [setEmoji]);

  const closeEmoji = React.useCallback(() => {
    setEmoji({ visible: false });
  }, [setEmoji]);

  return { openEmoji, closeEmoji, visible: emoji.visible };
};

export default useEmoji;
