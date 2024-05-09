// importação do react
import React from "react";
import ReactDOM from "react-dom/client";
// importação do css
import "./index.css";
// importação do router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importação de paginas
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Portifolio from "./pages/Portifolio/Portifolio.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/portifolio",
        element: <Portifolio />
      },
      {
        path:"/sobre",
        element: <Sobre />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
