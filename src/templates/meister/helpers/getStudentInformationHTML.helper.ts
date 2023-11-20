const getStudentInformationHTML = (content: string) => {
  const HTML_TAG = `<div style="padding-top:10px; padding-bottom:10px; text-align:right;">`;
  const scoreHTMLIndex = content.indexOf(HTML_TAG);
  const scoreHTMLCloseIndex = content.indexOf(`</div>`);
  const studentHTMLContent = content.substring(
    scoreHTMLIndex,
    scoreHTMLCloseIndex,
  );

  return studentHTMLContent.replace(HTML_TAG, "");
};

export default getStudentInformationHTML;
