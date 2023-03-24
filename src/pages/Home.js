import ListProduct from "../components/ListProduct";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const TITLE_ALL = "Danh sách tất cả sản phẩm";
const TITLE_MEN = "Danh sách tất cả sản phẩm nam";
const TITLE_WOMEN = "Danh sách tất cả sản phẩm nữ";

function Home({ products, handleAddToCart }) {
  const [typeProduct, setTypeProduct] = useState("ALL");

  const handelFilterProduct = (value) => {
    setTypeProduct(value);
  };

  const productsToShow =
    typeProduct === "ALL"
      ? products
      : typeProduct === "MEN"
      ? products.filter((p) => p.type === "MEN")
      : products.filter((p) => p.type === "WOMEN");
  const title =
    typeProduct === "ALL"
      ? TITLE_ALL
      : typeProduct === "MEN"
      ? TITLE_MEN
      : TITLE_WOMEN;
console.log('tqt show',typeProduct)
  return (
    <>
      <Carousel interval={2000} indicators={false} style={{paddingTop:"55px"}} fade>
        <Carousel.Item>
          <img
            style={{ height: "472px" }}
            className="d-block w-100"
            src="https://i.upanh.org/2023/03/24/ESSENTIALS-LINE-MAIN-KV-1920x984_px8b16340b41a46c24.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
              style={{ height: "470px" }}
            className="d-block w-100"
            src="https://i.upanh.org/2023/03/24/fashiondb885d2fa3355a25.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "470px" }}
            className="d-block w-100"
            src="https://i.upanh.org/2023/03/24/bannercf3ea6116c7624a3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="tab">
        <div>
          <button
            className={typeProduct === "ALL" ? "active" : ""}
            onClick={() => handelFilterProduct("ALL")}
          >
            Tất cả
          </button>
          <button
            className={typeProduct === "MEN" ? "active" : ""}
            onClick={() => handelFilterProduct("MEN")}
          >
            Nam
          </button>
          <button
            className={typeProduct === "WOMEN" ? "active" : ""}
            onClick={() => handelFilterProduct("WOMEN")}
          >
            Nữ
          </button>
        </div>
      </div>

      <ListProduct
        typeRender={"PRODUCT"}
        handleSubmit={handleAddToCart}
        products={productsToShow}
        title={title}
      />
    </>
  );
}

export default Home;
