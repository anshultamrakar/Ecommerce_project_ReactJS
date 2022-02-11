import Header from "./Header"; 
import Nav from "./Nav";
import Products from "./Products";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Login from "./Login";
import Address from "./PrivateRoute/Address";
import Footer from "./Footer";
import {Route , Routes } from 'react-router-dom'
import {DataProvider} from "./Context/DataContext"



function App() {


  return (
    <div className = "App">
    <DataProvider>
    <Header title = "Ecomerce App"/>
      <Nav />
      <Routes>
          <Route path = "/" element = {<Products/>}/>
          <Route path = "cart" element = {<Cart/>}/>
          <Route path = "wishlist" element = {<Wishlist/>}/>
           <Route path = "login" element = {<Login/>}/>
            <Route path = "address" element = {<Address/>}/>
        </Routes>
        <Footer/>
    </DataProvider>
     
      
    </div>
    
  );
}

export default App;
