import httpClient from "@/apis/httpClient";

const getImageUrl = async (file?: File) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file, file.name);

    const { data: imageUrl } = await httpClient.image.post(formData);
    return imageUrl;
  }
};

export default getImageUrl;
