import React, { useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";

import Carousel_Home from "./carousel_home";

function Innhanh_Carousel() {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState("");
  const [newName, setNewName] = useState("");

  const handleShow = () => setShow(true);

  return (
    <div id="myCarousel">
      <Container>
        <Carousel indicators={false} variant="dark">
          <Carousel.Item className="item1">
            <Carousel_Home />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner1.jpg"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner2.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner3.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner4.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner5.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/imgs/banners/Banner6.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Innhanh_Carousel;
