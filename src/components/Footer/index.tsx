import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo_79GT from "../svg/Logo_79GT";
import Link from "next/link";
import { Categorys } from "@/data/data_fake/Categorys";
import { useRouter } from "next/router";

const InNhanh_Footer = () => {
  const router = useRouter();
  if (router.asPath !== "/admin/dashboard")
    return (
      <div id="innhanh_footer">
        <div className="footer_top">
          <div className="footer_content w-95">
            <Row>
              {/* //Logo */}
              <Col xs={12} sm={12} md={6} xl={3}>
                <div className="innhanh_logo">
                  <Logo_79GT />
                  <span>www.innhanh79.com.vn</span>
                </div>
                <div className="innhanh_time">
                  <div className="time_icon">
                    <span className="material-symbols-outlined">update</span>
                  </div>
                  <div className="time_info">
                    <ul>
                      <li>Thứ 2 - Thứ 7</li>
                      <li>8h00 - 12h00</li>
                      <li>13h30 - 18h30</li>
                    </ul>
                  </div>
                </div>
              </Col>
              {/* //Adress */}
              <Col xs={12} sm={12} md={6} xl={3}>
                <div className="footer_item">
                  <div className="footer_header">
                    <p>CN1</p>
                  </div>
                  <div className="footer_info">
                    <ul>
                      <li className="adress">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/adress.png" />
                        </span>
                        <span>
                          43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.
                        </span>
                      </li>
                      <li className="phone">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/phone.png" />
                        </span>
                        <span>
                          <Link href={"tel:0888229079"}>0888.229.079</Link> -{" "}
                          <Link href={"tel: 0918196699"}> 0918.196.699</Link>
                        </span>
                      </li>
                      <li className="email">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/email.png" />
                        </span>
                        <span> innhanh7979@gmail.com</span>
                      </li>
                      <li className="zalo">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/zalo.png" />
                        </span>
                        <span> 0888.229.079</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={3}>
                <div className="footer_item">
                  <div className="footer_header">
                    <p>CN2</p>
                  </div>
                  <div className="footer_info">
                    <ul>
                      <li className="adress">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/adress.png" />
                        </span>
                        <span>
                          29BIS Nguyễn ĐÌnh Chiểu - P.Đa Kao - Q1 - Tp.HCM.
                        </span>
                      </li>
                      <li className="phone">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/phone.png" />
                        </span>
                        <span>
                          <Link href={"tel:0888229079"}>0888.229.079</Link> -{" "}
                          <Link href={"tel: 0918196699"}> 0918.196.699</Link>
                        </span>
                      </li>
                      <li className="email">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/email.png" />
                        </span>
                        <span> innhanh7979@gmail.com</span>
                      </li>
                      <li className="zalo">
                        <span className="innhanh_icon me-2">
                          <img src="/img/icon/zalo.png" />
                        </span>
                        <span> 0888.229.079</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} xl={3}>
                <div className="footer_item">
                  <div className="footer_header">
                    <p>LỐI TẮT</p>
                  </div>
                  <div className="footer_info d-flex justify-content-start">
                    <ul className="me-4">
                      <li>
                        <Link href={"/"}>Trang Chủ</Link>
                      </li>
                      {Categorys.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link href={item.url}>{item.name}</Link>
                          </li>
                        );
                      })}
                    </ul>

                    <ul className="ms-4">
                      <li>
                        <Link href={"/lien-he"}>Thanh toán</Link>
                      </li>

                      <li>
                        <Link href={"/lien-he"}>Thỏa thuận - Chính sách</Link>
                      </li>
                      <li>
                        <Link href={"/lien-he"}>Liên hệ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer_bot">
          <span>@ Coppyright by innhanh79.vn</span>
        </div>
      </div>
    );
};

export default InNhanh_Footer;
