import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
// import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Recipe from "./components/Recipe";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/recipe/:id" element={<Recipe />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
