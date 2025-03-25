import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Sử dụng react-router-dom đúng cách
import Header from "./HeaderFile/Header.jsx";
import Tab from "./HeaderFile/PageTwo/Tab.jsx";
import ShowCpn from "./HeaderFile/PageShowCpn/ShowCpn.jsx";
// import Middle from "./Page/MiddleFile/Middle.js";
import FootCpn from "./FootCpn/FootCpn.jsx";
import "./App.css";
import Tab2 from "./HeaderFile/PageThree/Tab2.jsx";
import Tab3 from "./HeaderFile/PageFour/Compare.jsx";
import Compare from "./HeaderFile/PageFour/Compare.jsx";
import MainTab from "./HeaderFile/MainTab/MainTab.jsx";
import Middle from "./MiddleFile/Middle.jsx";
import SignIn from "./HeaderFile/SignIn/SignIn.jsx";
import { chatAI } from "./Support/Support.js";
import Popup from "./Support/Support.jsx";

function App() {
  // chatAI("xin chào")
  // .then((res) => {
  //  console.log(res)
  // })
  // .catch((err) =>{
  //  console.log{err};
  // })
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bigContainer">

      <Routes>
        <Route
          path="/home"
          element={
            <div>
              <Header />
              <Middle />
              <FootCpn />
            </div>
          }
        />
        {/* <Route path="/" element={<Header />} /> */}

        <Route path="/tab" element={<MainTab />}>
          <Route index element={<Tab />} />

          <Route path=":idTab" element={<ShowCpn />} />
        </Route>

        <Route path="/tabSecond" element={<Tab2 />} />
        <Route path="/infcar" element={<ShowCpn />} />
        <Route path="/TabFour" element={<Compare />} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
      <button className="Support" onClick={()=> setIsPopupOpen(true)}><img src="https://media.istockphoto.com/id/1144489611/vi/vec-to/hotline-icon-vector-d%E1%BB%AF-li%E1%BB%87u-nam-d%E1%BB%8Bch-v%E1%BB%A5-h%E1%BB%97-tr%E1%BB%A3-kh%C3%A1ch-h%C3%A0ng-h%E1%BB%93-s%C6%A1-avatar-v%E1%BB%9Bi-tai-nghe-v%C3%A0-%C4%91%E1%BB%93.jpg?s=612x612&w=0&k=20&c=2_GrDFouHLIL_9EAlWIURe3IzESdNOU6_Zpqj89OiUo="/></button>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  
  );
}

export default App;
