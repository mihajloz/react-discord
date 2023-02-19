import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DirectMessages from "./components/DM/DirectMessages";
import Server1Main from "./components/Server1/Server1Main";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channels@me" element={<DirectMessages />} />
        <Route path="/guild-discovery" element={<Home />} />
        <Route path="/channels/VALORANT" element={<Server1Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
