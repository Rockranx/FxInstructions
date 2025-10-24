import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Home from "./Pages/Home";
import RegistrationGuide from "./Pages/RegistrationGuide";
import DepositGuide from "./Pages/DepositGuide";
import WithdrawalGuide from "./Pages/WithdrawalGuide";
import Mt5Login from "./Pages/Mt5Login";
import Howtotrade from "./Pages/Howtotrade";
import Faq from "./Pages/Faq";
import Support from "./Pages/Support";
import Error from "./Pages/Error";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration-guide" element={<RegistrationGuide />} />
          <Route path="/deposit-guide" element={<DepositGuide />} />
          <Route path="/withdrawal-guide" element={<WithdrawalGuide />} />
          <Route path="/mt5-login" element={<Mt5Login />} />
          <Route path="/how-to-trade" element={<Howtotrade />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
