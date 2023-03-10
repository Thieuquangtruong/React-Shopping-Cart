


export default function Products({type, productImg, productTitle, productPrice, onSubmit}) {
    
    return (
      <div className="product">
    
        <img src={productImg} alt=''></img>
        <div className="product-description">
          <p>{productTitle}</p>
          <span>{productPrice}VNĐ</span>
          <button className="btn-add" onClick={onSubmit}>{type === 'PRODUCT' ? 'Add to cart' : 'Remove'} </button>
        </div>
      </div>
    )
  }