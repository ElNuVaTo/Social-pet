import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menubar } from "@/components/ui/menubar";

import LogoIcon from "../../../assets/img/OIG1-removebg-preview.png";
import Bar from "./Bar";

const Main = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(74, 222, 128);
  height: 55px;
  padding: 0px 20px 0px 140px;
  position: relative;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 85px;
  width: 100px;

  a {
    height: 100%;
    cursor: pointer;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transform: scale(1.4);
  }
`;
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Enlace = styled(Link)`
  font-size: 15px;
`;

const Escritorio = () => {
  const Beneficios = [
    {
      title: "Beneficios",
      opciones: [
        { href: "/falabella", title: "Falabella | 30% de descuento" },
        { href: "/tenpo", title: "Tenpo | 20% de descuento" },
        { href: "/mach", title: "Mach | 20% de descuento" },
        { href: "/dale", title: "Dale | 20% de descuento" },
      ],
    },
  ];
  const NecesitoAyuda = [
    {
      title: "Necesito ayuda",
      opciones: [
        { href: "/ayuda", title: "Toda las dudas" },
        { href: "/dale", title: "Problemas con el sitio web" },
        { href: "/ayuda/", title: "Retraso en la entrega" },
        { href: "/ayuda", title: "Problemas con el pago" },
        { href: "/mach", title: "Artículo dañado" },
      ],
    },
  ];

  return (
    <>
      <Main>
        <Logo>
          <Link to={"/"}>
            <img src={LogoIcon} alt="Logo de social pet" />
          </Link>
        </Logo>

        <Contenedor>
          <Menubar>
            <Enlace
              to="/"
              className=" cursor-pointer rounded-sm px-3 py-1.5  text-black  outline-none hover:bg-green-300 "
            >
              Inicio
            </Enlace>
            <Bar content={Beneficios} />
            <Bar content={NecesitoAyuda} />
          </Menubar>

          <Link
            to={"/iniciar-sesion"}
            className="text-sm cursor-pointer rounded-sm px-3 py-1.5 bg-green-300  text-black  font-medium outline-none hover:bg-green-300 "
          >
            Iniciar sesion
          </Link>
        </Contenedor>
      </Main>
    </>
  );
};
export default Escritorio;
