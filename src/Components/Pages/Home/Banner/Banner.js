import { Carousel } from "react-bootstrap";
import banner1 from "../../../../images/banner/banner-1.png";
import banner2 from "../../../../images/banner/banner-2.png";
import banner3 from "../../../../images/banner/banner-3.png";
import banner4 from "../../../../images/banner/banner-4.png";
import banner5 from "../../../../images/banner/banner-5.png";
import banner6 from "../../../../images/banner/banner-6.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner6} alt="First slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              Spice a dish with love and it pleases every palate.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner5} alt="First slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              Indian spices can find a place in any cuisine. It's just a matter
              of opening your mind and palate to new flavors.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="First slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              Use spices for flavor in food rather than adding a bunch of oils,
              fats, or sauces.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="First slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              Spice is life. It depends upon what you like... have fun with it.
              Yes, food is serious, but you should have fun with it.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              “A good spice often deceives us into thinking that someone is a
              good cook.”
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Third slide" />
          <Carousel.Caption>
            <h4 className="banner-quote w-75 mx-auto">
              Spice is life. It depends upon what you like... have fun with it.
              Yes, food is serious, but you should have fun with it.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
