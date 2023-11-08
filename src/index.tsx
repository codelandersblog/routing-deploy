import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";
import "/public/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./About";
import { Contact } from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("app")
);
