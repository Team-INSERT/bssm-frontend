import httpClient from "@/_apis/httpClient";

const getImageUrl = async (file: File | undefined) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file, file.name);

    const { data: imageUrl } = await httpClient.image.post(formData);
    return imageUrl;
  }
};

export default getImageUrl;
