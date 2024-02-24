import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";
import CustomerHome from "./CustomerHome";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <CustomerHome />, errorElement: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div className="" style={{ height: "vh-100" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
