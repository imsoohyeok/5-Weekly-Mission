import "./Card.css";

export const Card = ({ children, onMouseOver, onMouseOut }) => {
  return (
    <div className="Card" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {children}
    </div>
  );
};
