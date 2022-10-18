import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
