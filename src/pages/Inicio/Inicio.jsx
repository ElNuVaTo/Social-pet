import styled from "styled-components";

import Carrusel from "../../components/carousel_banner/Carrusel";
import Acceso from "../../components/acceso/Acceso";
import Promocionado from "../../components/promocionado/Promocionado";
import Footer from "../../components/footer/Footer";

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  max-width: 1200px;
  margin: 35px auto 100px auto;
`;

const Inicio = () => {
  return (
    <>
      <Main>
        <Carrusel />

        <Div>
          <Acceso />
          <Promocionado />
        </Div>

        <Footer />
      </Main>
    </>
  );
};

export default Inicio;
