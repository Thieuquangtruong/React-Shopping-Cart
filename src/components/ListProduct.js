import Product from './Product'

function ListProduct({ products, title, handleSubmit, typeRender,amount }) {
    return ( 
        <>
      
            <h3 style={{textAlign: 'center'}}>{title}</h3>
            <div className='product-container'>
                {
                products.map((product) => {
                    return (
                    <Product
                        key={product.id}
                        productImg={product.productImg}
                        productTitle={product.productTitle}
                        productPrice={product.productPrice}
                        type={typeRender}
                        amount={product.amount}
                        onSubmit={() => handleSubmit(product)}
                    />
                    )
                })
                }
            </div>
        </>
     );
}

export default ListProduct;