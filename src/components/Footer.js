import React from "react";

const Footer = () => {
  return (
    <div
      classname="footer"
      style={{ backgroundColor: "#1C1C1E", color: "#F0F8FF" }}
    >
      <div className="container">
        <div className="row">
          {/*Colum1 */}
          <div className="col">
            <h4>Liên hệ Shop</h4>
            <ul className="list-unstyle">
              <li> Mã số thuế :0106486365</li>
              <li>Số điện thoại : 09349397979</li>
              <li>địa chỉ : 312 Nguyễn Xí phường 13 quận bình thạnh</li>
            </ul>
          </div>
          {/*Colum2 */}
          <div className="col">
            <h4>Hỗ trợ khách hàng</h4>
            <ul className="list-unstyle">
              <li>Chính Sách Vận Chuyển</li>
              <li>Chính Sách Đổi Trả</li>
              <li>Chính Thức Thanh Toán</li>
            </ul>
          </div>
          {/*Colum3 */}
          <div className="col">
            <h4>Công Ty</h4>
            <ul className=" list-unstyle">
              <li>Tuyển dụng</li>
              <li>Tin thời trang</li>
              <li>hợp tác nhượng quyền</li>
              <li>Hot Line</li>
            </ul>
          </div>
          {/*Colum4 */}
          <div className="cool">
            <h4> Theo dõi chúng tôi</h4>
            <ul className="list-unstyle">
              <i class="fab fa-facebook-square"></i> Facebook
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="cool-sm">
            &copy;{new Date().getFullYear()} Novelty Shoop | All right reserved
            | Term & Conditions | Privacy | Sercurity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
