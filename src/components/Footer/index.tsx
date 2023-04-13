import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Logo_79GT from "../svg/Logo_79GT";
import Link from "next/link";

const InNhanh_Footer = () => {
  return (
    <div id="innhanh_footer">
      <div className="footer_top">
        <div className="footer_content w-95">
          <Row>
            <Col>
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
            <Col>
              <div className="footer_item">
                <div className="footer_header">
                  <p>CN1</p>
                </div>
                <div className="footer_info">
                  <ul>
                    <li>
                      <span className="material-symbols-outlined me-2">
                        pin_drop
                      </span>
                      <span>
                        43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.
                      </span>
                    </li>
                    <li>
                      <span className="material-symbols-outlined me-2">
                        phone_in_talk
                      </span>
                      <span>
                        <Link href={"tel:0888229079"}>0888.229.079</Link> -{" "}
                        <Link href={"tel: 0918196699"}> 0918.196.699</Link>
                      </span>
                    </li>
                    <li>
                      <span className="material-symbols-outlined me-2">
                        mail
                      </span>
                      <span> innhanh7979@gmail.com</span>
                    </li>
                    <li>0888.229.079</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer_item">
                <div className="footer_header">
                  <p>CN2</p>
                </div>
                <div className="footer_info">
                  <ul>
                    <li>43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.</li>
                    <li>0888.229.079 - 0918.196.699</li>
                    <li>innhanh7979@gmail.com</li>
                    <li>0888.229.079</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer_item">
                <div className="footer_header">
                  <p>LỐI TẮT</p>
                </div>
                <div className="footer_info">
                  <ul>
                    <li>43D/10 Hồ Văn Huê - P.9 - Q.Phú Nhuận - TP.HCM.</li>
                    <li>0888.229.079 - 0918.196.699</li>
                    <li>innhanh7979@gmail.com</li>
                    <li>0888.229.079</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer_item">
                <div className="footer_header">
                  <p>PHẢN HỒI</p>
                </div>
                <div className="footer_info">
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-2">
                      <Form.Control
                        rows={2}
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Enter your feedback."
                      />
                    </Form.Group>
                    <div className="txt_right">
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
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
