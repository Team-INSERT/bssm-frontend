import { MEISTER } from "../constants";

const getMeisterChapter = (chapter: string) => {
  switch (chapter) {
    case MEISTER.직업기초능력:
      return "직업기초능력";
    case MEISTER.전문기술역량:
      return "전문 기술 역량";
    case MEISTER.인성직업의식:
      return "인성 직업 의식";
    case MEISTER.인문학적소양:
      return "인문학적 소양";
    case MEISTER.외국어능력:
      return "외국어 능력";
    default:
      return chapter;
  }
};

export default getMeisterChapter;
