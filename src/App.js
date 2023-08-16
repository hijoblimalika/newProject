import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Main from './components/main/Main';
import Describing from './components/describing/Describing';
import NewEra from './components/newEra/NewEra';
import Customize from './components/customize/Customize';
function App() {
  return (
    <div className="App">
   
    <Navbar/>
    <Banner/>
    <Main/>
    <Describing/>
    <NewEra/>
    <Customize/>
    </div>
  );
}

export default App;
