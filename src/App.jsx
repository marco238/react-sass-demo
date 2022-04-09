import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './views/home/Home';
import Albums from './views/albums/Albums';
import About from './views/about/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
