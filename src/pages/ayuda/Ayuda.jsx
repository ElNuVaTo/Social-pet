import styled from "styled-components";

import Footer from "../../components/footer/Footer";
import Dudas from "../../components/dudas/Dudas";

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

const Ayuda = () => {
  return (
    <>
      <Main>
        <Div>
          <Dudas />
        </Div>

        <Footer />
      </Main>
    </>
  );
};

export default Ayuda;
