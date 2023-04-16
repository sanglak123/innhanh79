import { Companys_Data } from "@/data/data_fake/Companys";
import React from "react";
import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import Logo_79GT from "../svg/Logo_79GT";

const Systems = () => {
  return (
    <div id="system">
      <section id="company">
        <Row>
          <Col md={12} xl={4}>
            <div className="company_content">
              <div className="logo">
                <Logo_79GT />
                <p>www.innhanh79.com</p>
              </div>
              <div className="company_info">
                <ListGroup as="ul">
                  <ListGroup.Item
                    as="li"
                    active
                    disabled
                    className="d-flex justify-content-between"
                  >
                    <span> {Companys_Data.name}</span>
                    <span className="material-symbols-outlined">settings</span>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <span>Hotline:</span>
                    <span className="ms-2">{Companys_Data.hotline}</span>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <span>Website:</span>
                    <span className="ms-2">{Companys_Data.domain}</span>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Col>
          {Companys_Data.branch.map((item, index) => {
            return (
              <Col key={index} md={12} xl={4}>
                <div className="brabch_item">
                  <ListGroup as="ul">
                    <ListGroup.Item
                      as="li"
                      active
                      disabled
                      className="d-flex justify-content-between"
                    >
                      <span> {item.name}</span>
                      <span className="material-symbols-outlined">
                        settings
                      </span>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                      <span>Hotline:</span>
                      <span className="ms-2">{item.hotline}</span>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                      <span>Email:</span>
                      <span className="ms-2">{item.email}</span>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                      <span>Phone:</span>
                      <span className="ms-2">{item.phone}</span>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                      <span>Zalo:</span>
                      <span className="ms-2">{item.zalo}</span>
                    </ListGroup.Item>

                    <ListGroup.Item as="li">
                      <span>Adress:</span>
                      <span className="ms-2">{item.adress}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default Systems;
