export const deleteImageCloud = async (images) => {
  const response = await fetch(`${import.meta.env.VITE_URL_BACKEND}/delete-image`, {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(images),
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");
  return response.ok; 
};
