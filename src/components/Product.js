import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function Products({
  type,
  productImg,
  productTitle,
  productPrice,
  onSubmit,
  productId,
}) {
  return (
    <div className="product">
      <Card style={{ width: "16.5rem", background: "white" }}>
        <NavLink to={`/cart/${productId}`}>
          <Card.Img variant="top" src={productImg} />
        </NavLink>
        <Card.Body>
          <NavLink to={`/cart/${productId}`}>
            <Card.Title>{productTitle}</Card.Title>
          </NavLink>

          <Card.Text>Giá Sản Phẩm : {productPrice}VNĐ</Card.Text>
          <Button className="btn-add" variant="primary" onClick={onSubmit}>
            {type === "PRODUCT" ? "Add to cart" : "Remove"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
