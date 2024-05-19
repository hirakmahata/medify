import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ addPosition, number, text, icon, color }) => {
  return (
    <div className={`board-container ${addPosition}`}>
      <div className={`board-icons ${color}`}>{icon}</div>
      <h1>{number}+</h1>
      <p>{text}</p>
    </div>
  );
};

Board.propTypes = {
  addPosition: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

export default Board;
