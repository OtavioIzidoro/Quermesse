import Carousel from "react-bootstrap/Carousel";
import teste from "../assets/images.jpg";
import t1 from "../assets/images (2).jpg";
import t2 from "../assets/images (1).jpg";

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={teste} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={teste} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={t1} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={t2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
