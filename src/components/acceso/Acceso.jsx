import AccesoRapido from "../cards/AccesoRapido";

import Perro from "../../assets/img/acceso/ComidaDePerro.webp";
import Gato from "../../assets/img/acceso/ComidaDeGato.webp";
import Arena from "../../assets/img/acceso/Arena.webp";
import Premios from "../../assets/img/acceso/Premios.webp";
import Veterinario from "../../assets/img/acceso/Veterinario.webp";
import Servicios from "../../assets/img/acceso/Servicios.webp";

const Acceso = () => {
  return (
    <>
      <section className="flex w-full justify-between">
        <AccesoRapido title="Comida" desc="Perro" src={Perro} />
        <AccesoRapido title="Comida" desc="Gato" src={Gato} />
        <AccesoRapido title="Arena" desc="Gato" src={Arena} />
        <AccesoRapido title="Premios" desc="Mascotas" src={Premios} />
        <AccesoRapido title="Veterinario" desc="Mascotas" src={Veterinario} />
        <AccesoRapido title="Servicios" desc="Mascotas" src={Servicios} />
      </section>
    </>
  );
};
export default Acceso;
