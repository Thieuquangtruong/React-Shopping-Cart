import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Admin from "./pages/Manager/Admin";
import ProductDetail from "./pages/ProductDetail";
import Alert from "react-bootstrap/Alert";

function App() {
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  console.log("tql listCart", listCart, "products", products);
  //Get Data
  useEffect(() => {
    fetch("https://63f43bca864fb1d600246cf7.mockapi.io/api/v1/123")
      .then((res) => res.json())
      .then((data) => {
        console.log("result: ", products);
        setProducts(data.map(p => {
          p.price = p.productPrice
          return p;
        }));
      });
  }, []);

  const handleChange = (item, d) => {
    let ind = -1;
    listCart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = listCart;
    tempArr[ind].amount += d;
    tempArr[ind].price = tempArr[ind].amount*tempArr[ind].productPrice;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;

    console.log('tql prodddd',[...tempArr], item )
    setListCart([...tempArr]);
  };

  const handleAddToCart = (product) => {
    // xu ly trung o day
    //step 1; tim product.id co nam trong listCart hay ko
    // loi tham chieu,tạo tham chiếu mới de ko bi trung obj
    // tao vùng {..item} hoac object.assign({},item)
    let isExisted = false;
    const newListCart = listCart.map((item) => {
      const newItem = { ...item };
      if (newItem.id === product.id) {
        isExisted = true;
        newItem.amount++;
        newItem.price = newItem.amount*product.productPrice
      }
      return newItem;
    });
    if (isExisted) {
      setListCart(newListCart);
    } else {
      setListCart((prev) => [...prev, product]);
    }
  };

  const handleRemoveCart = (product) => {
    setListCart((prev) => {
      return prev.filter((p) => p.id !== product.id);
    });
  };

  const handleAddProduct = (data) => {
    console.log("tql data", data);

    const tempProduct = {
      id: products.length+1,
      productImg:
        data.type === "MEN"
          ? "https://i.upanh.org/2023/03/24/aothuntayngannamcotron7c8848971db4a35c.jpg"
          : "https://i.upanh.org/2023/03/24/10s22tssw001_cradle_pink_3__177cf6e7b8be54be7.jpg",
      productTitle: data.productTitle,
      productPrice: data.productPrice,
      amount: data.amount,
      price:  data.productPrice,
      type: data.type,
    };

    setProducts((prev) => [...prev, tempProduct]);
    // alert("Thêm sản phẩm vào danh sách sản phẩm thành công!");
    setShowNotification(true)
  };

  return (
    <div className="app">
      <Header CartNumber={listCart} />

      <Routes>
        <Route
          path="*"
          element={
            <Home
              className="aaa"
              products={products}
              handleAddToCart={handleAddToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              handleChange={handleChange}
              listCart={listCart}
              products={products}
              handleRemoveCart={handleRemoveCart}
            />
          }
        />
        <Route path="/cart/:productId"  element={<ProductDetail  handleChange={handleChange}  listCart={listCart} products={products} handleAddToCart={handleAddToCart} />} />
        <Route
          path="/admin"
          element={
            <Admin products={products} handleAddProduct={handleAddProduct} />
          }
        />
      </Routes>
      <Footer />
      <BackToTop></BackToTop>
          {/* them nut alert */}
      {showNotification ? <Alert style={{
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        zIndex: '2000'
      }} key={"info"} variant={"info"} >
        Thêm sản phẩm vào danh sách sản phẩm thành công! <i onClick={() => setShowNotification(false)} class="far fa-window-close"></i>
      </Alert> : null}
      
    </div>
  );
}

export default App;
