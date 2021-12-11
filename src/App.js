import './App.css';
import { EUROtoUSD } from './screens/EUROtoUSD';
import { USDtoGBP } from './screens/USDtoGBP';
import { Home } from './screens/Home';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="EUROtoUSD" element={<EUROtoUSD />} />
        <Route path="USDtoGBP" element={<USDtoGBP />} />
      </Routes>
    </div>
  );
}

export default App;
