import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login />, errorElement: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
