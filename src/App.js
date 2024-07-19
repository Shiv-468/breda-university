import './App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=' !overflow-hidden'>
      <Navbar />
      <HeroSection/>
      <Cards/>
    </div>
  );
}

export default App;
