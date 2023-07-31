import React from "react";

const useEmoji = () => {
  const [emoji, setEmoji] = React.useState({ visible: false });

  const openEmoji = React.useCallback(() => {
    setEmoji({ visible: true });
  }, [setEmoji]);

  const closeEmoji = React.useCallback(() => {
    setEmoji({ visible: false });
  }, [setEmoji]);

  return { openEmoji, closeEmoji, visible: emoji.visible };
};

export default useEmoji;
