
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import About from './components/About'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={About()} /> */}
          <Route exact path='/' element={Main()} />
          <Route exact path='/experience' element={Main()} />
          <Route exact path='/resume' element={Resume()} />
          <Route exact path='/projects' element={Projects()} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
