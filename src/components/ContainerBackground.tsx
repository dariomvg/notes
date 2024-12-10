import { colors } from "../constants/recursos";
import "../styles/Container-background.css";
import { ContainerType } from "../types/types";

const ContainerBackground = ({ handleBackground }: ContainerType): JSX.Element => {
  return (
      <div className="container-colors">
        {colors.map((item, index) => (
          <span
            key={index}
            className="item-color"
            onClick={() => handleBackground(item)}
            style={{ backgroundColor: item.color }}></span>
        ))}
      </div>
  );
};

export default ContainerBackground;
