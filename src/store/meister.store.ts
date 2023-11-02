import { atom } from "recoil";

export const emptyMeister = {
  score: 0,
  positivePoint: 0,
  negativePoint: 0,
  basicJobSkills: 0,
  professionalTech: 0,
  workEthic: 0,
  humanities: 0,
  foreignScore: 0,
};

export const meisterStore = atom({
  key: "meisterStore",
  default: emptyMeister,
});
