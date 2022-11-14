import React, { useContext } from "react";
import "./App.css";
import Header from "./component/Header";
import NoPage from "./component/NoPage";
import Home from "./component/Home";
import TourDetails from "./component/TourDetails";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
// import { AppContext } from "./context";
import CitiesProvider from "./context";

function App() {
  return (
    <div className="App">
      <Header />
      <CitiesProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/Tour-details/:id"
            element={<TourDetails />}
          ></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </CitiesProvider>
      <Footer />
    </div>
  );
}

export default App;


