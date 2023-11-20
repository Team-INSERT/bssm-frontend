import { MEISTER, SCORE } from "../../constants";
import { MeisterChartData } from "../../interfaces";

const meisterChartData: Array<MeisterChartData> = [
  { group: MEISTER.직업기초능력, scoreType: SCORE.AVG },
  { group: MEISTER.직업기초능력, scoreType: SCORE.MY },
  { group: MEISTER.직업기초능력, scoreType: SCORE.MAX },

  { group: MEISTER.전문기술역량, scoreType: SCORE.AVG },
  { group: MEISTER.전문기술역량, scoreType: SCORE.MY },
  { group: MEISTER.전문기술역량, scoreType: SCORE.MAX },

  { group: MEISTER.인성직업의식, scoreType: SCORE.AVG },
  { group: MEISTER.인성직업의식, scoreType: SCORE.MY },
  { group: MEISTER.인성직업의식, scoreType: SCORE.MAX },

  { group: MEISTER.인문학적소양, scoreType: SCORE.AVG },
  { group: MEISTER.인문학적소양, scoreType: SCORE.MY },
  { group: MEISTER.인문학적소양, scoreType: SCORE.MAX },

  { group: MEISTER.외국어능력, scoreType: SCORE.AVG },
  { group: MEISTER.외국어능력, scoreType: SCORE.MY },
  { group: MEISTER.외국어능력, scoreType: SCORE.MAX },
];

export default meisterChartData;
