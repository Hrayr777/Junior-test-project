import style from "./ContactUs.module.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "../../assets/images/Home.png";
import Email from "../../assets/images/Email.png";
import Call from "../../assets/images/Call.png";
import boll from "../../assets/images/boll.png";
import bollEnter from "../../assets/images/bollEnter.png";

import Accordion from "react-bootstrap/Accordion";
import { Card, useAccordionButton } from "react-bootstrap";
import { useState } from "react";

function ContactUs() {
  function CustomToggle({ children, eventKey }) {
    const [click, setClick] = useState(false);

    const decoratedOnClick = useAccordionButton(eventKey, () =>
      setClick((current) => !current)
    );

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        className={style.section3CardHeader}
      >
        {click === true ? (
          <img src={bollEnter} alt="" className="me-2" />
        ) : (
          <img src={boll} alt="" className="me-2" />
        )}
        {children}
      </button>
    );
  }
  return (
    <>
      {/* Section1 */}

      <div
        className={`${style.header} d-flex flex-column justify-content-center align-items-center`}
      >
        <h2>Contact Us</h2>
        <div className={style.line}></div>
        <p>
          There are many variations of passages of Lorem Ipsum available, have{" "}
          <br />
          suffered alteration in some form.
        </p>
      </div>

      {/* Section2 */}

      <div
        className={`d-flex justify-content-center align-items-center mt-5 ${style.section2}`}
        style={{ minHeight: "786px" }}
      >
        <div className={`${style.section2Left} me-5 container`}>
          <h2>Keep in Touch</h2>
          <div className={style.line}></div>
          <p>
            There are many variations of passages of Lorem Ipsum <br />
            available, but the majority have suffered alteration in some <br />
            form, by injected humour, or randomised words which don't <br />
            look even slightly believable.
          </p>
          <div className={`${style.section2LeftImages}`}>
            <div className="d-flex align-items-center  ">
              <div>
                <img src={Home} alt="" />
              </div>
              <div className="ms-4">
                <h2>Visit Us :</h2>
                <p>No: 09a, Downtown, San Dieago, USA.</p>
              </div>
            </div>
            <div className="d-flex align-items-center  ">
              <div>
                <img src={Email} alt="" />
              </div>
              <div className="ms-4">
                <h2>Drop Us :</h2>
                <p>support@pages.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center  ">
              <div>
                <img src={Call} alt="" />
              </div>
              <div className="ms-4">
                <h2>Call Us :</h2>
                <p>Call: 1-800-123-9999</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex">
            <input type="text" className={style.nameInp} placeholder="Name" />
            <input
              type="email"
              className={style.emailInp}
              placeholder="Email"
            />
          </div>
          <input type="text" className={style.phoneInp} placeholder="Phone" />
          <textarea className={style.textarea} placeholder="Message"></textarea>
          <div
            className={`${style.section2RightCheck} d-flex align-items-center`}
          >
            <input type="checkbox" />
            <p>
              Keep me up to date with news and offers from time to time by email
            </p>
          </div>
          <button className={style.section2Button}>Send Message</button>
        </div>
      </div>

      {/* {Section3} */}

      <div className={style.section3}>
        <h2>Frequent Questions?</h2>
        <div className={style.line}></div>
        <div>
          <div className={`d-flex mt-5 ${style.section3Acordeon}`}>
            <Accordion alwaysOpen className={style.AccordionBody}>
              <Accordion.Item
                eventKey="0"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="0">
                      Do you offer discounts for education?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="0"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="1">
                      Is Hack Producivity book available on the one stores?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className={style.section3CardText}>
                      Many desktop publishing packages and web page editors to
                      now <br />
                      use Lorem Ipsum as their default model text, andangle
                      uncover <br />
                      many web sites still in their infancy.
                      <p className="mt-2">
                        There are many variations of of Lorem Ipsum available.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="2">
                      What is Hack Productivity book about?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="2"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="3">
                      Where can I get Hack Productivity book?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="3"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="4">
                      Do you offer discounts for education?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="4"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
            </Accordion>

            {/* Acordion Right Part */}

            <Accordion
              alwaysOpen
              className={`${style.AccordionBody}  ${style.AccordionBody1} `}
            >
              <Accordion.Item
                eventKey="0"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="0">
                      Do you offer discounts for education?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="0"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="1"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="1">
                      Is Hack Producivity book available on the one stores?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className={style.section3CardText}>
                      Many desktop publishing packages and web page editors to
                      now <br />
                      use Lorem Ipsum as their default model text, andangle
                      uncover <br />
                      many web sites still in their infancy.
                      <p className="mt-2">
                        There are many variations of of Lorem Ipsum available.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="2"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="2">
                      What is Hack Productivity book about?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="2"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="3"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="3">
                      What is Hack Productivity book about?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="3"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
              <Accordion.Item
                eventKey="4"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="4">
                      Where can I get Hack Productivity book?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="4"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="5"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="5">
                      Where can I get Hack Productivity book?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="5"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>

              <Accordion.Item
                eventKey="6"
                style={{ border: "none", backgroundColor: "#00000000" }}
              >
                <Card style={{ border: "none", backgroundColor: "#00000000" }}>
                  <Card.Header style={{ backgroundColor: "#00000000" }}>
                    <CustomToggle eventKey="6">
                      Where can I get Hack Productivity book?
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse
                    eventKey="6"
                    className={style.section3CardText}
                  >
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
