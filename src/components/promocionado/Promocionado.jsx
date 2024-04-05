import styled from "styled-components";
import Producto from "../cards/Producto";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Contenedor = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Promocionado = () => {
  return (
    <>
      <Main>
        <h2>Promocionado</h2>

        <Contenedor>
          <Producto />
          <Producto />
          <Producto />
          <Producto />
          <Producto />
        </Contenedor>
      </Main>
    </>
  );
};
export default Promocionado;
