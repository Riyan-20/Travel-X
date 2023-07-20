import './App.css';
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
import Section3 from './components/section3/section3'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>

      </div>
  );
}

export default App;
