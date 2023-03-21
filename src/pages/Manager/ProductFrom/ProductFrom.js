// import useInput from '../../../hooks/useInput';
import { useFormik } from "formik";
import { Button, Modal } from "react-bootstrap";

function ProductForm({ isShow,handleClose, handleAddProduct }) {
  const formik = useFormik({
    initialValues: {
      productTitle: "",
      productPrice: "",
      type: "",
      amount: "",
    },

    onSubmit: (values) => {
      const data = {
        productTitle: values.productTitle,
        productPrice: values.productPrice,
        type: values.type,
        amount: 1,
      };

      handleAddProduct(data);
    },
  });



  return (
    <>
      <Modal size="xl" show={isShow} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title><i class="far fa-shopping-cart"></i> Thêm Sản Phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="product-form">
              <div>
                <label>Tên sản phẩm</label>
                <input
                  type="text"
                  value={formik.values.productTitle}
                  onChange={formik.handleChange}
                  name="productTitle"
                />
              </div>
              <div>
                <label>Giá sản phẩm</label>
                <input
                  type="text"
                  value={formik.values.productPrice}
                  onChange={formik.handleChange}
                  name="productPrice"
                />
              </div>
              <div>
                <label>Loại sản phẩm</label>
                <div className="type-select">
                  <select
                    selected="MEN"
                    name="type"
                    style={{ width: 75 }}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                  >
                    <option value="WOMEN">Nữ</option>
                    <option value="MEN">Nam</option>
                    
                  </select>
                </div>
              </div>
              <button>Thêm sản phẩm</button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;
