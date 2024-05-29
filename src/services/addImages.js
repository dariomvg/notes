export const addImagesCloud = async (formdata) => {
  const response = await fetch(`${import.meta.env.URL_BACKEND}/upload-image`, {
    method: "POST",
    body: formdata,
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");

  const { objImage } = await response.json();
  return objImage;
};
