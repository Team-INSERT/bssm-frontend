import { IMealList } from "@/interfaces";

const emptyMealList: IMealList = {
  data: {
    MORNING: {
      content: "",
      cal: 0,
    },
    LUNCH: {
      content: "",
      cal: 0,
    },
    DINNER: {
      content: "",
      cal: 0,
    },
  },
  keys: [],
};

export default emptyMealList;
