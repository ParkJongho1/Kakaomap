import React from "react";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Kakao from "./components/kakaomap/Kakao"
import SelectMap from "./components/selectmap/SelectMap"




export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Kakao />} />
          <Route path="s" element={<SelectMap />} />
        </Routes>
      </Router>
  );
}
