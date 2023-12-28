import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ImageCarousel from "components/ImageCarousel";
import Screenshot from "components/Screenshot";
import { SwiperSlide } from "swiper/react";
import image1 from "../../../public/images/gameplay/mona-fondo.png";
import image2 from "../../../public/images/gameplay/PJ1.png";
import image3 from "../../../public/images/gameplay/mona2.png";
// import image4 from "../../../public/images/gameplay/shop.png";
// import image5 from "../../../public/images/gameplay/wizard_npc.png";

const ScreenshotSection = () => {
  return (
    <Section
      sectionId="screenshots"
      className="text-center text-white py-20 text-center"
      padding={false}
    >
      <Wrapper>
        <h1 className="title-15">Characters</h1>
        <ImageCarousel>
          <SwiperSlide>
            <Screenshot image={image1} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image3} />
          </SwiperSlide>
          {/* <SwiperSlide>
            <Screenshot image={image4} />
          </SwiperSlide>
          <SwiperSlide>
            <Screenshot image={image5} />
          </SwiperSlide> */}
        </ImageCarousel>
      </Wrapper>
    </Section>
  );
};

export default ScreenshotSection;
