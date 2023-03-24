import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function ProductDetail({ handleAddToCart }) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  console.log("productId", productId);

  //Get Data
  useEffect(() => {
    fetch("https://63f43bca864fb1d600246cf7.mockapi.io/api/v1/123")
      .then((res) => res.json())
      .then((products) => {
        console.log("products", products);
        const temp = products.find((e) => e.id == productId);
        console.log("temp", temp);
        setProduct(temp);
      });
  }, []);

  if (!product) return null;
  

  return (
    <Container>
      <Row>
        <Col>
          <Card
            style={{
              paddingTop: "60px",
              background: "white",
            }}
          >
            <Row>
              <Col sm={6}>
                <Card.Img variant="top" src={product.productImg}/>
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title style={{ fontSize: "30px" }}>
                    {product.productTitle}
                  </Card.Title>
                  <div class="rating">
                    <div class="stars" style={{ color: "yellow" }}>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no">
                      <b>244 reviews</b>
                    </span>
                  </div>
                  <p class="product-description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <p class="vote">
                    <b>
                      <strong>77%</strong>
                    </b>{" "}
                    of buyers enjoyed this product!{" "}
                    <b>
                      <strong>(88 votes)</strong>
                    </b>
                  </p>
                  <Card.Text>
                    <b>Giá Sản Phẩm : {product.productPrice}VNĐ</b>
                  </Card.Text>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="primary"
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
