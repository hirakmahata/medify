import "./Card.css";
import PropTypes from "prop-types";

const Card = ({
  blogImage,
  blogTopic,
  date,
  description,
  userName,
  userImage,
}) => {
  return (
    <div className="card-container">
      <div className="image-section">
        <img src={blogImage} alt="card" />
      </div>
      <div className="text-section">
        <div className="topic-date">
          <p className="topic">{blogTopic}</p>
          <p className="date">{date}</p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="user">
          <div className="avatar">
            <img src={userImage} alt="" />
          </div>
          <div className="userName">{userName}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  blogImage: PropTypes.string.isRequired,
  blogTopic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
};

export default Card;
