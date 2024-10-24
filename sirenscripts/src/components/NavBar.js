import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/favlogo.png';

function NavBar() {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' style={{ width: '70%', height: 'auto' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')} >Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/3139-rahul/" target="_blank"><i className="fa-brands fa-linkedin-in fa-xl"></i></a>
              <a href="https://github.com/rahules24" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>
              <a href="https://stackoverflow.com/users/24976649/r%c3%a1hul" target="_blank"><i className="fa-brands fa-stack-overflow fa-xl"></i></a>
              <a href="https://www.upwork.com/freelancers/~01587352546a63a36d?mp_source=share" target="_blank"><i className="fa-brands fa-upwork fa-xl"></i></a>
            </div>
            <button className='vvd' onClick={() => { 
              window.location.href = '#connect'; 
            }}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;