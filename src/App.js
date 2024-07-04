import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CollectionPage from "./components/CollectionPage";
import NeckLessCollectionH from "./components/NeckLessCollectionH";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/Neckless" element={<NeckLessCollectionH />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
