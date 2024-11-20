import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Laxmi sri Rice Mill</h1>
              </div>
              <p>WE PROVIDE THE BEST QUALITY RICE AND ITS PRODUCTS IN THIS AREA.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                {/* <li>Careers</li> */}
                <li>Our Mill</li>
                <li>Our Shops</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                {/* <li>Track Your Order </li> */}
                {/* <li>Corporate & Bulk Purchasing </li> */}
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Door No. 144/3, Main Road, Mudigunta
                   Mdl: Jaipur, Dist: Mancherial- 504 302.(Telangana) </li>
                <li>Email: narlasrinivas@gmail.com</li>
                <li>Phone: 9393257852</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
