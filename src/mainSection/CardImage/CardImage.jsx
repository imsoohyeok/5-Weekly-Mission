import "./CardImage.css";
import { DefaultImage } from "./contain";

export const CardImage = ({ imageSource, alt, isZoomIn }) => {
  const className = isZoomIn ? "CardImage CardImage-hovered" : "CardImage";

  return (
    <div>
      style={{ backgroundImage: `url(${imageSource ?? DefaultImage})` }}
      className={className}
      alt={alt}
    </div>
  );
};
