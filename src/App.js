import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Stream from './Components/Stream/Stream';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Activities from './Components/Activities/Activities';
import ICC from './Components/ICC/ICC';
import ListYourShow from './Components/ListYourShow/ListYourShow';
import Corporate from './Components/Corporate/Corporate';
import Buzz from './Components/Buzz/Buzz';
import Plays from './Components/Plays/Plays';
import Sports from './Components/Sports/Sports';
import Offers from './Components/Offers/Offers';
import GiftCards from './Components/GiftCard/GiftCards';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
          <Route path='/plays' element={<Plays />}></Route>
          <Route path='/sports' element={<Sports></Sports>}></Route>
          <Route path="/activities" element={<Activities/>}></Route>
          <Route path='/buzz' element={<Buzz />}></Route>
          <Route path="/icc_mens" element={ <ICC/>}></Route>
          <Route path='/listyourShow'element={<ListYourShow />}></Route>
          <Route path='/Corporates' element={<Corporate />}></Route>
          <Route path='/offers' element={<Offers ></Offers>}></Route>
          <Route path='/giftCards' element={<GiftCards ></GiftCards>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
