import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Stock from './Pages/Stock';
import Dashboard from './Pages/Dashboard';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Data from './data';

function App() {



  //these routes will allow us to navigate to different "pages" of the web application
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/stock/:symbol' element={<Stock data={Data}/>}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>

    </div>
  );
}

export default App;

//API KEY d0d61f6f3c3457edc5fa10a0bfce97a0
