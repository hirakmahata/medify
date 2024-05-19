import "./Blog.css";
import cardImg from "../../assets/blog-images/card.png";
import userImg from "../../assets/blog-images/rebeka.jpg";

import Card from "./Card";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="headings">
        <p>Blog & News</p>
        <h1>Read Our Latest News</h1>
      </div>
      <div className="cards">
        <Card
          blogImage={cardImg}
          blogTopic="Medical"
          date="March 31, 2022"
          description="6 Tips To Protect Your Mental Health When You’re Sick"
          userName="Rebecca Lee"
          userImage={userImg}
        />
        <Card
          blogImage={cardImg}
          blogTopic="Medical"
          date="March 31, 2022"
          description="6 Tips To Protect Your Mental Health When You’re Sick"
          userName="Rebecca Lee"
          userImage={userImg}
        />{" "}
        <Card
          blogImage={cardImg}
          blogTopic="Medical"
          date="March 31, 2022"
          description="6 Tips To Protect Your Mental Health When You’re Sick"
          userName="Rebecca Lee"
          userImage={userImg}
        />
      </div>
    </div>
  );
};

export default Blog;
