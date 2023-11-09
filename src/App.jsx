import './App.css';
import NavBar from './Componets/NavBar/NavBar';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Componets/Footer/Footer';
import men_banner from './Componets/Assets/banner_mens.png'
import women_banner from './Componets/Assets/banner_women.png'
import kids_banner from './Componets/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar></NavBar>
        <Routes>
            <Route path='' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
            <Route path='/womans' element={<ShopCategory banner={women_banner} category='women'/>}/>
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>  
            <Route path='/login' element={<LoginSignup/>}/>  
        </Routes>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
