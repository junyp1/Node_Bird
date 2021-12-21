import propTypes from "prop-types";
import { useState } from "react";
import Slick from "react-slick";
import {
  CloseBtn,
  Header,
  Global,
  Overlay,
  SlickWrapper,
  ImgWrapper,
  Indicator,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global></Global>
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src}></img>
              </ImgWrapper>
            ))}
          </Slick>
        </div>
        <Indicator>
          <div>
            {currentSlide + 1} /{images.length}
          </div>
        </Indicator>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
  onClose: propTypes.func.isRequired,
};
export default ImagesZoom;
