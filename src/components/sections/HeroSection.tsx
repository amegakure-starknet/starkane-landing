import ImageSection from "components/containers/pagesections/ImageSection";
import ImageSectionMobile from "components/containers/pagesections/ImageSectionMobile";
import { default as heroImage } from "../../../public/images/mona-derecha3.png";
import {useEffect, useState} from "react"

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateVisibleSlides() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();
    console.log("mobile: ", isMobile);
  });

  return (
    <>
      {isMobile ? (
        <ImageSectionMobile
          image={heroImage}
          className="bg-black bg-opacity-25"
          height="h-screen"
          sectionId="top"
        />
      ) : (
        <ImageSection
          image={heroImage}
          className="bg-black bg-opacity-25"
          height="h-screen"
          sectionId="top"
        />
      )}
    </>
  );
};

export default HeroSection;
