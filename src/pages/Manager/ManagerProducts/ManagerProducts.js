import Table from "react-bootstrap/Table";


export default function ManagerProducts({products,handleRemoveCart}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ảnh</th>
          <th>Tên Sản Phẩm</th>
          <th>Giá</th>
          <th>Loại</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td><img style={{height:50}} src={product.productImg} alt=""></img></td>
              <td>{product.productTitle}</td>
              <td>{product.productPrice} VNĐ</td>
              <td>{product.type === 'MEN' ? 'Nam' : 'Nữ'}</td>
             
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
