import { createBrowserRouter, Outlet } from "react-router-dom";
import "./App.scss";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import OfferNav from "./components/OfferNav";
import Register from "./components/Register";

function App() {
  return (
    <>
      <OfferNav />
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <About /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
    errorElement: <Error />,
  },
  {
    path: "/admin",
    element: <App />,
  },
]);

export default App;
