import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
        <footer className='footer'>
            <Container className='align-item-center'>
                <Row>
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="">
                                <img src={navIcon1} />
                            </a>
                            <a href="">
                                <img src={navIcon2} />
                            </a>
                            <a href="">
                                <img src={navIcon3} />
                            </a>
                            <p>© 2024 - All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer