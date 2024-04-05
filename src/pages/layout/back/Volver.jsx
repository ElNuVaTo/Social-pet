import { Link } from "react-router-dom";

import AtrasIcon from "../../../assets/icons/arrow-back-up.svg";

const Volver = () => {
  return (
    <Link to="/" className="absolute top-5 left-5 flex gap-5 items-center">
      <img
        src={AtrasIcon}
        alt="Icono de volver atras"
        className="bg-green-400 py-2 px-2 rounded-full"
      />
    </Link>
  );
};

export default Volver;
