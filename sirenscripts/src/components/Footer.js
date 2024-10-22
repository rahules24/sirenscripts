import { Container, Row, Col } from 'react-bootstrap'
import logo from '../assets/img/favlogo.png'

const Footer = () => {
  return (
        <footer className='footer'>
            <Container className='align-item-center'>
                <Row>
                    <Col sm={6}>
                        {/* <img src={logo} alt='Logo' style={{ width: '9%', height: 'auto' }}/>footer */}
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/3139-rahul/" target="_blank"><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
                            <a href="https://github.com/rahules24" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
                            <a href="https://stackoverflow.com/users/24976649/r%c3%a1hul" target="_blank"><i class="fa-brands fa-stack-overflow fa-xl"></i></a>
                            <p>© 2024 - All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer