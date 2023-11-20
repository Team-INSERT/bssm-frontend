import httpClient from "@/apis/httpClient";

const getS3ImageUrl = async (file?: File) => {
  if (file) {
    const formData = new FormData();
    formData.append("image", file, file.name);

    const { data: imageUrl } = await httpClient.image.post(formData);
    return imageUrl;
  }
};

export default getS3ImageUrl;
