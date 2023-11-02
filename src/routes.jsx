import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./layouts";

import { Perfil, Cadastro, Home } from "./pages";

function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Routes;
