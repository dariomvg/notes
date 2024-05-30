
export const addImagesCloud = async (formdata) => {
  const url = import.meta.env.VITE_URL_BACKEND; 
  
  const response = await fetch(`${url}/upload-image`, {
    method: "POST",
    body: formdata,
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");

  const { objImage } = await response.json();
  return objImage;
};
