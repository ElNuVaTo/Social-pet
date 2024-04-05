import styled from "styled-components";

import ProductoImg from "../../assets/img/FITFORMULAPERROSENIOR20KG_400x.webp";
import RadioInput from "../inputs/RadioInput";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 14px 14px;
  width: max-content;
  height: max-content;
  border-radius: 5px;
  background-color: white;
border: 1px solid #c3c3c3cc;
`;
const Imagen = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin: 0 auto;
  background-color: transparent;
  user-select: none;
`;
const Marca = styled.em`
  position: absolute;
  left: 14px;
  top: 14px;
  color: #4a4a4a;
  font-size: 14px;
`;
const DataPrecioNombre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 8px 0;
  b {
  }
  p {
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const Producto = () => {
  return (
    <>
      <Main className="shadow-md">
        <Marca>Marca</Marca>

        <Imagen src={ProductoImg} alt="Comida de perro" draggable={false} />

        <DataPrecioNombre>
          <p>Fit Formula Perro SeniorFit Formula Perro Senior</p>

          <b>$44.990</b>
        </DataPrecioNombre>
        <div>
          <RadioInput
            options={[
              { label: "20KG", value: "5KG" },
              { label: "12KG", value: "12" },
              { label: "15KG", value: "15" },
              { label: "20KG", value: "20" },
            ]}
            name="KG"
          />
        </div>
      </Main>
    </>
  );
};
export default Producto;
