const checkTextOverflow = (content: string) => {
  const sentences = content.split("\n");
  const depth = sentences.length;

  if (depth > 4) {
    const summaryContent = sentences.slice(0, 4).join("\n");
    return `${summaryContent}...`;
  }
  return content;
};

export default checkTextOverflow;
