import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Cards from './Cards';
import NewArrivals from './NewArrivals';
import Products from './Products';
import Newsletter from './Newsletter';
import OtherCarousel from './OtherCarousel';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Cards/>
     <NewArrivals/>
     <Products/>
     <Newsletter/>
     <OtherCarousel/>
     <Footer/>
    </div>
  );
}

export default App;
