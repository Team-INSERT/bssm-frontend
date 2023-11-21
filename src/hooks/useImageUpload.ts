import httpClient from "@/apis/httpClient";

const useImageUpload = () => {
  const uploadImage = async (file?: File) => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file, file.name);
      const { data } = await httpClient.image.post(formData);
      return data;
    }
  };
  return { uploadImage };
};

export default useImageUpload;
