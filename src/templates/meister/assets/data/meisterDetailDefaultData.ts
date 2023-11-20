import { MeisterDetail } from "../../interfaces";

const meisterDetailDefaultData: MeisterDetail = {
  meister: {
    score: 0,
    pointHtmlContent: "",
    scoreHtmlContent: "",
    positivePoint: 0,
    negativePoint: 0,
    lastUpdate: "2000-03-01T00:00:00.000000",
    loginError: false,
    basicJobSkills: 0,
    professionalTech: 0,
    workEthic: 0,
    humanities: 0,
    foreignScore: 0,
  },
  avg: {
    score: 0,
    basicJobSkills: 0,
    professionalTech: 0,
    workEthic: 0,
    humanities: 0,
    foreignScore: 0,
    positivePoint: 0,
    negativePoint: 0,
  },
  max: {
    score: 0,
    basicJobSkills: 0,
    professionalTech: 0,
    workEthic: 0,
    humanities: 0,
    foreignScore: 0,
    positivePoint: 0,
    negativePoint: 0,
  },
};

export default meisterDetailDefaultData;
