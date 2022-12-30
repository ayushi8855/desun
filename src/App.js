

import { Route, Routes } from 'react-router';
import './App.css';
import { Nav } from './components/Nav';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
     <h1>Desun Technologies</h1>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
