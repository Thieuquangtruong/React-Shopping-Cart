// import ProductForm from "./ProductFrom/ProductFrom";
import React, { useState } from 'react';
import ManagerProducts from "./ManagerProducts/ManagerProducts";
import ProductFormFormik from "./ProductFrom/ProductFrom";
import { Button } from 'react-bootstrap';


function Admin ({handleAddProduct,products,handleRemoveCart}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

//   const handleOk = () => {
//     setIsModalOpen(false);
// };

const handleClose = () => {
    setIsModalOpen(false);
};

    return (
        <div  style={{padding: "100px"}}>
            <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
            <Button style={{marginBottom: 10}} type="primary" onClick={showModal}>Thêm sản phẩm</Button>
            <ManagerProducts products={products}/>
            <ProductFormFormik isShow={isModalOpen} handleClose={handleClose} handleAddProduct={handleAddProduct}/>
         
            
        </div>
      );
}

export default Admin ;
  