
import Hero from './Components/Hero.jsx';
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services";
import Footer from './Components/Footer.jsx';
import Contacts  from './Components/Contacts.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
   
      <Hero />
      <About/>
      <Services/>
      
      <Contacts/>
      <Footer/>
   
    </div>
  );
}

export default App;


