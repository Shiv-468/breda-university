import './App.css';
import Footer from './components/Footer';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=' !overflow-hidden'>
      <Navbar />
      <HeroSection/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
