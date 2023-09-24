import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar className="nav"/>
      <Hero className="hero"/>
    </div>
  );
}

export default App;
