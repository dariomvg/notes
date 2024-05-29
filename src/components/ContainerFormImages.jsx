
import { useState } from "react";
import "../styles/Container-form-image.css";
import { addImagesCloud } from "../services/addImages";
import { useContextNotes } from "../contexts/ContextNotes";

const ContainerFormImages = ({id, setFormImage, formImage}) => {
    const [imageFile, setImageFile] = useState("");
    const { addImagesLocal } = useContextNotes();

    const handleSubmitImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", imageFile);
        const objImage = await addImagesCloud(formData);
        addImagesLocal(objImage, id);
        setFormImage(!formImage)
      };

  return (
    <form onSubmit={handleSubmitImage} className="form-card-image">
      <input
        type="file"
        name="image"
        filename={imageFile}
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="input-form-image"
        required
      />
      <button type="submit" className="btn-form-image">
        Añadir
      </button>
    </form>
  );
};

export default ContainerFormImages;
