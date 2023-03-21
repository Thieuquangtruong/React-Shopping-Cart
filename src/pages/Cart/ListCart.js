import React,{useState} from 'react';
import { useEffect } from 'react';
import Table from "react-bootstrap/Table";
// import Products from "../../components/Product";
import Button from 'react-bootstrap/Button';


export default function ListCart({products,handleRemoveCart,handleChange}) {

  const [price, setPrice] = useState(0);
//hàm tăng tính tổn price
  const handlePrice = ()=>{
      let ans = 0;
      products.map((product)=>(
          ans += product.amount * product.productPrice
      ))
      setPrice(ans);
  }

  useEffect(()=>{
    handlePrice();
})

  return (<div style={{paddingTop:"55px"}}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ảnh</th>
          <th>Tên Sản Phẩm</th>
          <th>Giá</th>
          <th>Loại</th>
          <th>Số lượng</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td><img style={{height:50}} src={product.productImg} alt=""></img></td>
              <td>{product.productTitle}</td>
              <td>{product.productPrice}</td>
              <td>{product.type === 'MEN' ? 'Nam' : 'Nữ'}</td>
       
                <td> 
                <Button variant="outline-info"onClick={()=>handleChange(product, +1)}> + </Button>                                            
                        <Button variant="outline-warning">{product.amount}</Button>
                        <Button variant="outline-info"onClick={()=>handleChange(product, -1)}>-</Button>
                 </td>
           
              <td><Button onClick={()=>handleRemoveCart(product)} variant="danger">Remove</Button></td>                                    
            </tr>
            
          );
        })}
       
        <th colSpan={3}>Total Price of your Cart</th>
              <td>{price}VNĐ</td>   

      </tbody>
    </Table>
    </div>
  )};
