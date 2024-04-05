import styled from "styled-components";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Banner_Alianzas from "../../../src/assets/img/banner/1.webp";
import Banner_Rep from "../../../src/assets/img/banner/2.webp";

const Main = styled.section`
  width: 100%;
  position: relative;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Absolute = styled.span`
  position: absolute;
  top: 50%;

  display: flex;
  justify-content: center;
  &.Next {
    right: 5%;
  }
  &.Previous {
    left: 5%;
  }
`;
const Carrusel = () => {
  const Banners = [Banner_Alianzas, Banner_Rep];
  return (
    <>
      <Main>
        <Carousel>
          <CarouselContent>
            {Banners.map((item, index) => (
              <CarouselItem key={index}>
                <Imagen src={item} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>

          <Absolute className="Next">
            <CarouselNext variant="default" />
          </Absolute>

          <Absolute className="Previous">
            <CarouselPrevious variant="default" />
          </Absolute>
        </Carousel>
      </Main>
    </>
  );
};
export default Carrusel;
