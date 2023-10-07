import Storage from "@/_apis/storage";
import { TOKEN } from "@/_constants";

const getPageSize = () => {
  return Storage.getItem(TOKEN.POST_RENDER_LIMIT) ?? 10;
};

export default getPageSize;
