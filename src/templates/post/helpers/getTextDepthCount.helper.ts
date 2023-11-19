const getTextDepthCount = (content: string) => {
  const depth = content.split("\n").length;
  return depth;
};

export default getTextDepthCount;
