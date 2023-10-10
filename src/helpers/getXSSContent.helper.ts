const getXSSContent = (content?: string) => {
  if (content)
    return content
      .replaceAll("<style>", "")
      .replaceAll("</style>", "")
      .replaceAll("<script>", "")
      .replaceAll("</script>", "");
  return content;
};

export default getXSSContent;
