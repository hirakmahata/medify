import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./News.css";

import image1 from "../../assets/carousel-images/image 1.png";
import image2 from "../../assets/carousel-images/image 2.png";
import image3 from "../../assets/carousel-images/image 3.png";
import image4 from "../../assets/carousel-images/image 4.png";
import image5 from "../../assets/carousel-images/image 5.png";
import { settings } from "./NewsSettings";

const images = [image1, image2, image3, image4, image5];

const News = () => {
  return (
    <div className="news-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index + 1} className="slide">
            <img src={image} alt={`image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
