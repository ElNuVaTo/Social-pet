import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Menu from "./pages/layout/Menu";

import Volver from "./pages/layout/back/Volver";
import Inicio from "./pages/Inicio/Inicio";
import ErrorPage from "./error/ErrorPage";

import Ayuda from "./pages/ayuda/Ayuda";
import Shop from "./pages/layout/shop/Shop";
import IniciarSesion from "./components/auth/IniciarSesion";
import CrearCuenta from "./components/auth/CrearCuenta";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const Layout = () => {
  const location = useLocation();
  const excludedRoutes = {
    "/iniciar-sesion": true,
    "/crear-cuenta": true,
  };
  const shouldShowLayout = !excludedRoutes[location.pathname];

  return (
    <>
      {shouldShowLayout && (
        <>
          <Menu />
          <Shop />
        </>
      )}
      {!shouldShowLayout && <Volver />}

      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <Inicio /> },

      {
        path: "ayuda",
        element: <Ayuda />,
        errorElement: <ErrorPage />,
      },
      {
        path: "alianzas",
        errorElement: <ErrorPage />,
      },
      {
        path: "iniciar-sesion",
        element: <IniciarSesion />,
        errorElement: <ErrorPage />,
      },
      {
        path: "crear-cuenta",
        element: <CrearCuenta />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default App;
