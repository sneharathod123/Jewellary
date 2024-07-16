import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CollectionPage from "./components/CollectionPage";
import NeckLessCollectionH from "./components/NeckLessCollectionH";
import GotoTop from "./components/GotoTop";
import Bracelet from "./components/Bracelet";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: '<YOUR GTM ID>'
}

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/Neckless" element={<NeckLessCollectionH />} />
        <Route path="/Bracelet" element={<Bracelet />} />
      </Routes>
      <GotoTop />
    </BrowserRouter>
  );
}

export default App;
