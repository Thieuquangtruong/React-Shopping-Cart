import ManagerProducts from "./ManagerProducts/ManagerProducts";
import ProductForm from "./ProductFrom/ProductFrom";

function Admin ({handleAddProduct,products,handleRemoveCart}) {
    return (
        <div style={{margin:50}}>
         <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
            <ManagerProducts handleRemoveCart={handleRemoveCart} products={products}  />
            <h3 style={{textAlign: 'center'}}>Thêm sản phẩm</h3>
            <ProductForm handleAddProduct={handleAddProduct}/>
        </div>

      );
}

export default Admin ;
  