

import { Route, Routes } from 'react-router';
import './App.css';
import { Nav } from './components/Nav';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <div className="App">
     <h1>Desun Technologies</h1>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
