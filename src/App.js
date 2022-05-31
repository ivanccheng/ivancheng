
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import About from './components/About'
import Main from './components/Main'
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={Main()} />
          <Route exact path='/about' element={About()} />
          <Route exact path='/resume' element={Resume()} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
