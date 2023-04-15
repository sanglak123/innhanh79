import { Intro_Imgs } from "@/data/data_fake/Intros";
import Carousel_Home from "@/layouts/carousel/carousel_home";
import SlideImages from "@/layouts/slideImages";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutIn79 = () => {
  return (
    <div id="intro_in79">
      <Container>
        <div className="about_content">
          <Carousel_Home />

          <section className="intro">
            <div className="innhanh_header">
              <h1>
                <span>Về </span>CHÚNG TÔI
              </h1>
            </div>
            <Row>
              <Col xs={12} xl={6}>
                <span>GIỚI THIỆU</span>
                <div className="intro_txt">
                  <p>
                    In nhanh là một lĩnh vực đang rất phát triển tại Việt Nam,
                    đặt biệt là các thành phố lớn, thành phố di lịch, khi sự hội
                    nhập đòi hỏi sự chuyên nghiệp và nhanh chóng chính xác cao
                    cùng với đời sống kinh tế ngày càng đi lên thì quan điểm về
                    quảng cáo, khuyến mãi cũng không ngừng thay đổi. Trong đó,
                    xu hướng chung là mọi Khách Hàng ngày càng khắt khe hơn với
                    những ấn phẩm quảng cáo, những thông điệp mà bất cứ Doanh
                    Nghiệp nào cũng cần phải có, để tiếp cận thị trường, tiếp
                    cận Khách Hàng tiềm năng của mình. Là một Doanh Nghiệp
                    chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một
                    phần công sức của mình vào sự thành công và phát triển của
                    quý vị.
                  </p>
                </div>
              </Col>
              <Col xs={12} xl={6}>
                <div className="innhanh_imgs">
                  <SlideImages arrayImg={Intro_Imgs} />
                </div>
              </Col>
            </Row>
          </section>
          <section className="capacity">
            <div className="innhanh_header">
              <h1>
                <span>Năng lực </span>SẢN XUẤT
              </h1>
            </div>
            <Row>
              <Col xs={12} xl={4}></Col>
              <Col xs={12} xl={8}>
                <div className="capacity_content">
                  <h4>HỆ THỐNG MÁY IN NHANH</h4>
                  <ul>
                    <li>
                      Hệ thống máy in chính hãng của Nhật - Dòng máy Konica
                      Miltona hiện đại đáp ứng được toàn bộ yêu cầu của khách
                      hàng.
                    </li>
                    <li>
                      Với hệ thống thành phẩm hiện đại :máy cắt card tự động,
                      máy cán màng, máy khoan, máy bấm kim, máy vào bìa keo
                      gáy…Bên cạnh đó chúng tôi trang bị thêm máy ép kim. Máy bế
                      hộp, bao thư, máy bế cắt tem nhãn. Máy dán tự động. Máy bế
                      bao bì tự động…
                    </li>
                    <li>
                      Với mong muốn đem đến sản phẩm tốt nhất cho khách hàng,
                      chúng tôi đang từng bước hoàn thiện và nâng cấp máy móc
                      cũng như con người.
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default AboutIn79;
