import { Link } from "react-router-dom";

import InputAndLabel from "./InputAndLabel";

const CrearCuenta = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crea tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <InputAndLabel
              htmlFor="email"
              type="email"
              id="email"
              placeholder="Correo"
              autoComplete="current-email"
            >
              Correo electronico
            </InputAndLabel>

            <InputAndLabel
              htmlFor="password"
              type="password"
              id="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              classNameLabel="block text-sm font-medium  text-gray-900 flex items-center justify-between"
            >
              Contraseña
            </InputAndLabel>

            <InputAndLabel
              htmlFor="phone"
              type="text"
              id="phone"
              placeholder="Telefono"
              autoComplete="current-phone"
            >
              Numero de telefono
            </InputAndLabel>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-300 text-black px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear mi cuenta
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 ">
            tienes cuenta?
            <Link
              to="/iniciar-sesion"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-2 text-sm"
            >
              Iniciar sesion
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default CrearCuenta;
