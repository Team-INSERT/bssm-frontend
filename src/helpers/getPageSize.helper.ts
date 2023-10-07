import Storage from "@/apis/storage";
import { TOKEN } from "@/constants";

const getPageSize = () => {
  return Storage.getItem(TOKEN.POST_RENDER_LIMIT) ?? 10;
};

export default getPageSize;
