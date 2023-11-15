import Storage from "@/storage";

const get회당불러올게시글개수 = () => {
  return Storage.getItem("SETTING:회당불러올게시글수") ?? 20;
};

export default get회당불러올게시글개수;
