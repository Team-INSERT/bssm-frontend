import IMeal from "./meal.interface";

export default interface MealListType {
  data: {
    [meal: string]: IMeal;
  };
  keys: Array<string>;
}
