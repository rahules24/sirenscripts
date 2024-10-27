import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from "../assets/img/me.png";

const Footer = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Kafkaesque", "Apollonian", "Hikikomori", "Stoyteller", "Machiavellian", "Gamemaker", "Hellinist", ];
    const typingSpeed = 150;
    const pauseDuration = 1000;

    useEffect(() => {
        const handleTyping = setInterval(() => {
            typeWriter();
        }, typingSpeed);

        return () => clearInterval(handleTyping);
    }, [text, isDeleting]);

    const typeWriter = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // If full text is reached, pause before deleting
        if (!isDeleting && updatedText === fullText) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
        }
        // If deletion is done, move to next word
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <footer className='footer'>
            <Container className='align-item-center'>
                <Row>
                    <Col sm={6}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={me} 
                                alt="Profile" 
                                style={{ width: '15%', height: 'auto', marginRight: '20px', borderRadius: '10%' }} 
                            />
                            <div style={{ lineHeight: '1.5' }}>
                                <span>Ráhul</span><br />
                                <span>rahul.es2024@gmail.com</span><br />
                                <span>Tarragona, Spain</span><br />
                                <span className="txt-rotate">
                                    <span className="wrap">
                                        <i>{text}</i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/3139-rahul/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in fa-xl"></i>
                            </a>
                            <a href="https://github.com/rahules24" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github fa-xl"></i>
                            </a>
                            <a href="https://stackoverflow.com/users/24976649/r%c3%a1hul" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-stack-overflow fa-xl"></i>
                            </a>
                            <a href="https://www.upwork.com/freelancers/~01587352546a63a36d?mp_source=share" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-upwork fa-xl"></i>
                            </a>
                            <p>© 2024 - All rights reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
