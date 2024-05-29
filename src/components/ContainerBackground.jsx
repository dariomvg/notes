import { colors, localImages } from "../constants/recursos";
import "../styles/Container-background.css";

const ContainerBackground = ({ handleBackground }) => {
  return (
    <>
      <div className="container-colors">
        {colors.map((item, index) => (
          <span
            key={index}
            className="item-color"
            onClick={() => handleBackground(item)}
            style={{ backgroundColor: item.color }}></span>
        ))}
      </div>
      <div className="container-images">
        {localImages.map((item, index) => (
          <img
            key={index}
            src={`/images/${item.img}`}
            width={40}
            height={40}
            className="item-img"
            onClick={() => handleBackground(item)}
            alt="image background"
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
};

export default ContainerBackground;
