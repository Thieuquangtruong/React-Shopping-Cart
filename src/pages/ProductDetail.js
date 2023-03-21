import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  console.log("productId", productId);

  //Get Data
  useEffect(() => {
    fetch("https://63ac467634c46cd7ae7cce54.mockapi.io/api/mindx/products/")
      .then((res) => res.json())
      .then((products) => {
        console.log("products", products);
        const temp = products.find((e) => e.id == productId);
        console.log("temp", temp);
        setProduct(temp);
      });
  }, []);

  if (!product) return null;
const random = () => {
 return Math.floor(Math.random() * 100);
}
  return (
    <Container>
      <Row>
        <Col>
          <Card
            border="danger"
            style={{
              paddingTop: "60px",
              background: "white",
            }}
          >
            <Row>
              <Col sm={6}>
                <Card.Img variant="top" src={`.${product.productImg}`} />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{product.productTitle}</Card.Title>
                  <div class="rating">
                    <div class="stars" style={{color:"yellow"}}>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </div>
                    <span class="review-no"><b>{random()} reviews</b></span>
                  </div>
                  <p class="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p class="vote"><b><strong>{random()}%</strong></b> of buyers enjoyed this product! <b><strong>({random()} votes)</strong></b></p>
                  <Card.Text><b>Giá Sản Phẩm : {product.productPrice}</b></Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
