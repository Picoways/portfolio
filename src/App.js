import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import ComicBook from "./Components/ComicBook"
import LanguageSelector from './Components/LanguageSelector';
import ComicBookES from './Components/ComicBookES';
import ComicBookPT from './Components/ComicBookPT';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LanguageSelector />} />
        <Route exact path="/English" element={<ComicBook />} />
        <Route exact path="/Spanish" element={<ComicBookES />} />
        <Route exact path="/Portuguese" element={<ComicBookPT />} />
      </Routes>
    </div>
  );
}

export default App;
