import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import GradientBackground from "./components/GradientBackground";
import Files from "./pages/files/Files";
import FileInfo from "./pages/fileinfo/FileInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/files",
    element: <Files/>
  },
  {
    path: "/fileinfo",
    element: <FileInfo/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
