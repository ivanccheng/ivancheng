
import './App.css';
import { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import About from './components/About'
import Main from './components/Experiences'
import Resume from './components/Resume'
import Projects from './components/Projects';

function App() {
  useEffect(() => {
    document.title = "Ivan Cheng";
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header></Header>
          <Routes>
            <Route exact path='/experience/' element={Main()} />
            <Route exact path='/resume/' element={Resume()} />
            <Route exact path='/projects/' element={Projects()} />
            <Route exact path='/' element={Main()} />
          </Routes>
        </div>
      </HashRouter>
    </div>

  );
}

export default App;
