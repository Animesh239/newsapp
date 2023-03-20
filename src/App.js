// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App =()=> {
  const pageSize = 6;
  
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/business/*"
            element={
              <News
                key="business"
                pageSize={pageSize}
                country={"in"}
                category={"business"}
              />
            }
          />
          <Route
            path="/entertainment/*"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                country={"in"}
                category={"entertainment"}
              />
            }
          />
          <Route
            path="/general/*"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          />
          <Route
            path="/health/*"
            element={
              <News
                key="health"
                pageSize={pageSize}
                country={"in"}
                category={"health"}
              />
            }
          />
          <Route
            path="/science/*"
            element={
              <News
                key="science"
                pageSize={pageSize}
                country={"in"}
                category={"science"}
              />
            }
          />
          <Route
            path="/sports/*"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                country={"in"}
                category={"sports"}
              />
            }
          />
          <Route
            path="/technology/*"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                country={"in"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  
}

export default App