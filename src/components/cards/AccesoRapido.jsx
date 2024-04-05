import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Imagen = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  user-select: none;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const AccesoRapido = ({ title, desc, src }) => {
  return (
    <>
      <Main>
        <Imagen src={src} alt="" />
        <b>{title}</b>
        <p>{desc}</p>
      </Main>
    </>
  );
};
export default AccesoRapido;
