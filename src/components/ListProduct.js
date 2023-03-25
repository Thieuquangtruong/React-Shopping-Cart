import { Col, Row } from 'react-bootstrap';
import Product from './Product'

function ListProduct({ products, title, handleSubmit, typeRender,amount }) {
    return ( 
        <>
      
            <h3 style={{textAlign: 'center'}}>{title}</h3>
            <Row>
                {
                products.map((product) => {
                    return (
                    <Col lg={3} md={4} sm={6}>
                        <Product
                            key={product.id}
                            productId={product.id}
                            productImg={product.productImg}
                            productTitle={product.productTitle}
                            productPrice={product.productPrice}
                            type={typeRender}
                            amount={product.amount}
                            price={product.price}
                            onSubmit={() => handleSubmit(product)}
                        />
                    </Col>
                    )
                })
                }
            </Row>
        </>
     );
}

export default ListProduct;