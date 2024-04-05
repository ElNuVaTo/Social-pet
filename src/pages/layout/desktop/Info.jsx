import styled from "styled-components";

import FacebookIcon from "@/assets/icons/brand-facebook.svg";
import Instagram from "@/assets/icons/brand-instagram.svg";
import WhatsappIcon from "@/assets/icons/brand-whatsapp.svg";
import PhoneIcon from "@/assets/icons/phone.svg";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  padding: 4px 20px 4px 140px;

  background-color: #dfdfdf;

  &::after {
    content: "";
    position: absolute;
    background-color: rgb(74, 222, 128);
    width: 90px;
    height: 100%;
    left: 0;
  }
  &::before {
    content: "";
    position: absolute;
    background-color: rgb(74, 222, 128);
    width: 100px;
    height: 100%;
    left: 40px;
    transform: rotate(40deg);
  }
`;
const EnvioGratis = styled.b`
  font-size: 13px;
`;
const ContenedorEnlaces = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Enlace = styled.a`
  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
  }

  &.Instagram {
    position: relative;
    bottom: -1px;
  }
`;

const Info = () => {
  return (
    <>
      <Nav>
        <EnvioGratis>
          Envío gratis en pedidos superiores a $35.000, Entrega rápida las 24
          horas, todos los días
        </EnvioGratis>

        <ContenedorEnlaces>
          <Enlace href="" target="_blank" className="Fb">
            <img src={FacebookIcon} alt="Logo de Facebook" />
          </Enlace>
          <Enlace href="" target="_blank" className="Instagram">
            <img src={Instagram} alt="Logo de Instagram" />
          </Enlace>
          <Enlace href="" target="_blank">
            <img src={WhatsappIcon} alt="Logo de Whatsapp" />
          </Enlace>
          <Enlace href="" target="_blank">
            <img src={PhoneIcon} alt="Icono de numero telefonico" />
          </Enlace>
        </ContenedorEnlaces>
      </Nav>
    </>
  );
};
export default Info;
