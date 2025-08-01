import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import TodoDetails from "./pages/TodoDetails";
import Todos from "./pages/Todos";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/todos", element: <Todos /> },
  { path: "/about", element: <About /> },
  { path: "todos/:todoId", element: <TodoDetails /> },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
