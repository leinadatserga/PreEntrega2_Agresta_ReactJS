import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { bienvenida, categoria } from "./components/Variables";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={ "/" } element={ <ItemListContainer greeting={ bienvenida } /> } />
          <Route path={ "/category/:categoryId" } element={ <ItemListContainer greeting={ categoria } /> } />
          <Route path={ "/item/:id" } element={ <ItemDetailContainer /> } />
          <Route path={ "*" } element={ <Error404 /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
