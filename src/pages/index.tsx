import Head from "next/head";

import Innhanh_Carousel from "@/layouts/carousel";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import SlideImages from "@/layouts/slideImages";
import { ArrayImgs, Categorys, Productions } from "@/data/dataFake";
import SlidePartners from "@/layouts/slidePartners";

export default function Home() {
  return (
    <>
      <Head>
        <title>INNHANH79</title>
        <meta
          name="description"
          content="IN KTS || IN QUẢNG CÁO || IN BẢN VẼ || SETUP EVENTS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Innhanh_Carousel />
      <section id="about_in79" className="mt-5 mb-5">
        <Container>
          <div className="innhanh_header">
            <h1>
              <span>Trung tâm</span> INNHANH79
            </h1>
          </div>
          <div className="about_content">
            <Row>
              <Col xs={6}>
                <p className="txt_intro">
                  <Link href={"/"}>In Nhanh</Link> là một lĩnh vực đang rất phát
                  triển tại Việt Nam, đặt biệt là các thành phố lớn, thành phố
                  di lịch, khi sự hội nhập đòi hỏi sự chuyên nghiệp và nhanh
                  chóng chính xác cao cùng với đời sống kinh tế ngày càng đi lên
                  thì quan điểm về quảng cáo, khuyến mãi cũng không ngừng thay
                  đổi. Trong đó, xu hướng chung là mọi Khách Hàng ngày càng khắt
                  khe hơn với những ấn phẩm quảng cáo, những thông điệp mà bất
                  cứ Doanh Nghiệp nào cũng cần phải có, để tiếp cận thị trường,
                  tiếp cận Khách Hàng tiềm năng của mình. Là một Doanh Nghiệp
                  chuyên ngành in ấn giấy, chúng tôi mong muốn được góp một phần
                  công sức của mình vào sự thành công và phát triển của quý vị.
                </p>
                <Button>Xem thêm</Button>
              </Col>
              <Col xs={6}>
                <SlideImages arrayImg={ArrayImgs} />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section id="categorys_in79" className="mt-3 mb-3">
        <Container>
          <div className="categorys_content">
            <Row>
              {Categorys.map((item, index) => {
                return (
                  <Col key={index}>
                    <div className="cate_item">
                      <div className="innhanh_header">
                        <h1>{item.name}</h1>
                      </div>
                      <div className="cate_avatar">
                        <img src={item.avatar} alt={item.name} />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
      <section id="product_in79">
        <Container>
          <div className="innhanh_header">
            <h1>
              <span>Sản phẩm của</span> INNHANH79
            </h1>
          </div>
          <div className="product_content">
            <Row>
              {Productions.map((item, index) => {
                return (
                  <Col key={index} xs={4}>
                    <div className="product_item">
                      <div className="product_img">
                        <img src={item.Img.url} alt={item.Img.filename} />
                      </div>

                      <div className="product_header">
                        <span className="material-symbols-outlined me-3">
                          mail
                        </span>
                        <h4>{item.name}</h4>
                      </div>
                      <div className="product_info">
                        <ul>
                          <li>
                            <span>
                              Kích thước: <span>{item.size}</span>
                            </span>
                          </li>
                          <li>
                            <span>
                              Định lượng: <span>{item.quantative}</span>
                            </span>
                          </li>
                          <li>
                            <span>
                              Loại giấy: <span>{item.type_paper}</span>
                            </span>
                          </li>
                          <li>
                            <span>{item.tag}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="product_btn txt_right">
                        <Button className="w-100 p-2">Xem thêm</Button>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>

      <section id="partners_in79" className="mt-3 mb-3">
        <Container>
          <div className="partners_content">
            <div className="innhanh_header">
              <h1>
                <span>Đối tác</span> INHNANH79
              </h1>
            </div>
            <SlidePartners />
          </div>
        </Container>
      </section>
    </>
  );
}
