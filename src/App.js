import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Admin from "./pages/Manager/Admin";

function App() {
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);
  console.log("tql listCart", listCart, "products", products);
  //Get Data
  useEffect(() => {
    fetch("https://63f43bca864fb1d600246cf7.mockapi.io/api/v1/123")
      .then((res) => res.json())
      .then((products) => {
        console.log("result: ", products);
        setProducts(products);
      });
  }, []);

  const handleChange = (item, d) => {
    let ind = -1;
    products.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = products;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setProducts([...tempArr]);
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
    const tempProduct = {
      id: products.length,
      productImg:
        data.type === "MEN"
          ? "./images/thunNam.jpeg"
          : "./images/nuTayNgan.jpeg",
      productTitle: data.productTitle,
      productPrice: data.productPrice,
      amount: data.amount,
      type: data.type,
    };

    setProducts((prev) => [...prev, tempProduct]);
    alert("Thêm sản phẩm vào danh sách sản phẩm thành công!");
  };

  return (
    <div className="app">
      <Header CartNumber={listCart} />

      <Routes>
        <Route
          path="*"
          element={
            <Home products={products} handleAddToCart={handleAddToCart} />
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
        <Route
          path="/admin"
          element={
            <Admin products={products} handleAddProduct={handleAddProduct} />
          }
        />
      </Routes>
      <Footer />
      <BackToTop></BackToTop>
    </div>
  );
}

export default App;
