export const addImagesCloud = async (formdata) => {
  const response = await fetch(process.env.URL_ADD, {
    method: "POST",
    body: formdata,
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");

  const { objImage } = await response.json();
  return objImage;
};
