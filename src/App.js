import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
