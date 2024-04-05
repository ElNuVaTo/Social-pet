import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
  MenubarMenu,
} from "@/components/ui/menubar";

import Flecha from "../../../assets/icons/chevron-down.svg";
const Icono = styled.img`
  height: 20px;
  width: 20px;
  object-fit: cover;
  position: relative;
  bottom: -0.8px;
  left: 6px;
`;
const Text = styled.p`
  font-size: 15px;
`;

const Bar = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <div key={index}>
          <MenubarMenu>
            <MenubarTrigger>
              <Text>{item.title}</Text>

              <Icono src={Flecha} alt="Flecha que indica que es desplegable" />
            </MenubarTrigger>
            <MenubarContent>
              {item.opciones.map((item, index) => (
                <Link to={item.href} key={index}>
                  <MenubarItem>{item.title}</MenubarItem>
                </Link>
              ))}
            </MenubarContent>
          </MenubarMenu>
        </div>
      ))}
    </>
  );
};
export default Bar;
