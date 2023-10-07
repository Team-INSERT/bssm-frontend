const getTextDepth = (content: string) => {
  const depth = content.split("\n").length;
  return depth;
};

export default getTextDepth;
