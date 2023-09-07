import httpClient from "@/apis/httpClient";

export const getBambooPostList = async () => {
  const { data } = await httpClient.bamboo.get();
  return data;
};

export const getBambooPendingPostList = async () => {
  const { data } = await httpClient.bamboo.admin();
  return data;
};

export const createBambooPost = async (content: string) => {
  const { data } = await httpClient.bamboo.post({ content });
  return data;
};

export const updateBambooPost = async (id: number) => {
  const { data } = await httpClient.admin.putById(null, {
    params: { id },
  });
  return data;
};

export const deleteBambooPost = async (id: number) => {
  const { data } = await httpClient.admin.deleteById({
    params: { id },
  });
  return data;
};
