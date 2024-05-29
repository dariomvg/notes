export const deleteImageCloud = async (images) => {
  const response = await fetch(process.env.URL_DELETE, {
    method: "POST",
    headers: {"Content-type": "application/json; charset=UTF-8"},
    body: JSON.stringify(images),
  });
  if (!response.ok) throw new Error("No se pudo guardar la imagen.");
  return response.ok; 
};
