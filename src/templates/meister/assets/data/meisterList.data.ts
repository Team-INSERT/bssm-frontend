import { theme } from "@/styles";
import { MeisterKeyType } from "../../types";
import { MEISTER } from "../../constants";

const meisterListData: Array<{
  name: MeisterKeyType;
  color: string;
}> = [
  { name: MEISTER.전문기술역량, color: theme.primary_mint },
  { name: MEISTER.인성직업의식, color: theme.primary_red },
  { name: MEISTER.인문학적소양, color: theme.primary_yellow },
  { name: MEISTER.외국어능력, color: theme.primary_blue },
];

export default meisterListData;
