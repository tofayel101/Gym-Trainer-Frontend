
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
// import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout';
import SignUp from './Pages/SignUp/SignUp';
import Blogs from './Pages/Blogs/Blogs';
import Navbar from './Pages/Home/Banner/Navbar';

function App() {
  return (
    <div className="App">
      <div className="ham">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Checkout' element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
