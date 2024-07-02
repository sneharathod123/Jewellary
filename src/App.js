import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CollectionPage from './components/CollectionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
