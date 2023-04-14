import { Clients_Selector } from "@/sp/redux/slice/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Logo_79GT from "../svg/Logo_79GT";
import ModalSetting from "@/components/Modal/ModalSetting";
import ModalSignIn from "../Modal/ModalSignIn";
import ModalSignUp from "../Modal/ModalSignUp";
import { Categorys } from "@/data/data_fake/dataFake";

const Innhanh_Header = () => {
  const router = useRouter();
  const access_token = useSelector(Clients_Selector.access_token);
  const Client = useSelector(Clients_Selector.Client);

  //Auth
  const [SignIn, setSignIn] = useState(false);
  const [SignUp, setSignUp] = useState(false);

  const [show, setShow] = useState(false);
  useEffect(() => {
    const headerTop = window.document.getElementById("headerTop");
    const headerMain = window.document.getElementById("headerMain");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        headerTop?.classList.add("hide");
        headerMain?.classList.add("header_fix");
        setShow(true);
      } else {
        headerTop?.classList.remove("hide");
        headerMain?.classList.remove("header_fix");
        setShow(false);
      }
    });
  }, []);
  const handleBackTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="hearder" className="bsd">
        <div id="headerTop" className="header_top bgr_blue_700">
          <div className="w-95">
            <div className="header_top_content">
              <div className="top_left">
                <div className="left_item me-3">
                  <Link href={"/gioi-thieu"}>Giới thiệu</Link>
                </div>
                <div className="left_item me-3">
                  <Link href={"/thanh-toan"}>Thanh toán</Link>
                </div>
                <div className="left_item me-3">
                  <Link href={"/chinh-sach"}>Thỏa thuận - Chính sách</Link>
                </div>

                <div className="left_item me-3">
                  <Link href={"/lien-he"}>Liên hệ</Link>
                </div>
              </div>

              <div className="top_right">
                <div className="contact">
                  <Link className="d-flex" href={"tel:0888229079"}>
                    <span className="material-symbols-outlined me-2 right_icon">
                      phone_in_talk
                    </span>
                    <span>0888 229 079</span>
                  </Link>
                </div>

                <div className="contact">
                  <Link
                    className="d-flex"
                    href={"mailto:innhanh7979@gmail.com"}
                  >
                    <span className="material-symbols-outlined me-2 right_icon">
                      email
                    </span>
                    <span>innhanh7979@gmail.com</span>
                  </Link>
                </div>

                <div className="contact">
                  <Link className="d-flex" href={"/"}>
                    <span className="me-2">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                    <span> In Nhanh</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="headerMain" className="header_main">
          <div className="w-95">
            <Navbar
              collapseOnSelect
              expand="xl"
              className="bg_white nav_top"
              variant="light"
            >
              <Navbar.Brand className="me-5" href="/">
                <Logo_79GT />
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                id="btn_responsive"
              >
                <span className="material-symbols-outlined">subject</span>
              </Navbar.Toggle>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto my-2 my-lg-0 nav_left" navbarScroll>
                  <Nav.Link
                    className={
                      router.asPath === "/" ? "nav_link active" : "nav_link"
                    }
                    href="/"
                  >
                    Home
                  </Nav.Link>

                  {Categorys.map((item, index) => {
                    return (
                      <Nav.Link
                        key={index}
                        className={
                          router.asPath === item.url
                            ? "nav_link active"
                            : "nav_link"
                        }
                        href={item.url}
                      >
                        {item.name}
                      </Nav.Link>
                    );
                  })}
                </Nav>

                <Nav className="ms-auto my-2 my-lg-0 nav_right" navbarScroll>
                  <Button
                    className="btn_success d-flex"
                    onClick={() => setSignIn(true)}
                  >
                    <span className="material-symbols-outlined me-2">
                      login
                    </span>
                    <span> Đăng nhập</span>
                  </Button>

                  <Button
                    className="btn_primary d-flex"
                    onClick={() => setSignUp(true)}
                  >
                    <span className="material-symbols-outlined me-2">
                      how_to_reg
                    </span>
                    <span> Đăng ký</span>
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        {/* Modal */}
        <ModalSignIn show={SignIn} setShow={setSignIn} />
        <ModalSignUp show={SignUp} setShow={setSignUp} />
      </div>
      {show && (
        <Button id="btn_btt" onClick={() => handleBackTo()}>
          Back to top
        </Button>
      )}
    </>
  );
};

export default Innhanh_Header;
