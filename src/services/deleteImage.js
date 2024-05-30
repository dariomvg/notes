export const deleteImageCloud = async (images) => {
  const url = import.meta.env.VITE_URL_BACKEND;
  const response = await fetch(`${url}/delete-image`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",},
    body: JSON.stringify(images),
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");
  return response.ok;
};
