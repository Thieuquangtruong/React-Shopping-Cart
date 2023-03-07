import './App.css';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import ProductForm from './components/ProductFrom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';




function App() {
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  //Get Data
  useEffect(() => {
      fetch('https://63ac467634c46cd7ae7cce54.mockapi.io/api/mindx/products')
      .then(res => res.json())
      .then(products => {
          console.log('result: ',products);
          setProducts(products);
      })
  },[])

  const handleAddToCart = (product) => {
      setListCart(prev => [...prev, product])
  }

  const handleRemoveCart = (product) => {
      setListCart(prev => {
      return prev.filter(p => p.id !== product.id);
      })
  }

 const handleAddProduct = (data) => {
   const tempProduct = {
     id: products.length,
     productImg: data.type === 'MEN' ? './images/thunNam.jpeg' : './images/nuTayNgan.jpeg',
     productTitle: data.productTitle,
     productPrice: data.productPrice,
     type: data.type,
   }

   setProducts(prev => [...prev, tempProduct]);
   alert('Thêm sản phẩm vào danh sách sản phẩm thành công!');
 }


  return ( 
    <div className="app">
      <Header />
      
      <Routes>
        <Route path="/home" element={<Home products={products} handleAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart listCart={listCart} handleRemoveCart={handleRemoveCart} />} />
				<Route path="/admin" element={<ProductForm handleAddProduct={handleAddProduct}/>} />
      </Routes> 
      <Footer />  
      
       <BackToTop></BackToTop>
    </div>
   );
}

export default App;


