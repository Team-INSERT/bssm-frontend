const getMeisterChapter = (chapter: string) => {
  switch (chapter) {
    case "professionalTech":
      return "전문 기술 역량";
    case "workEthic":
      return "인성 직업 의식";
    case "humanities":
      return "인문학적 소양";
    case "foreignScore":
      return "외국어 능력";
    default:
      return chapter;
  }
};

export default getMeisterChapter;
