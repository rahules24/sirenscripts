import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const [isFading, setIsFading] = useState(false); // New state for fading animation
    const toRotate = ["Software Engineer", "FullStack Developer", "DevOps Engineer", "AGI Enthusiast"];
    const period = 1500; // Time to wait at full text
    const animationDuration = 500; // Duration for fade-in/out animation

    useEffect(() => {
        let ticker = setInterval(() => {
            if (!isFading) {
                tick();
            }
        }, delta);

        return () => clearInterval(ticker);
    }, [text, isFading]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, Math.max(1, text.length - 1))
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period); // Pause when full text is displayed
            startFade(); // Trigger fading animation before deleting
        } else if (isDeleting && updatedText === fullText.substring(0, 1)) {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
            startFade(); // Trigger fading animation before moving to the next text
        } else {
            setDelta(200); // Regular typing and deleting speed
        }
    };

    const startFade = () => {
        setIsFading(true);
        setTimeout(() => {
            setIsFading(false); // End the fade after animation duration
        }, animationDuration);
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                <span className="tagline">SirenScripts</span>
                            </div>
                            )}
                        </TrackVisibility>
                        <h1>
                            {`Hi, I'm Ráhul`}<br />
                            <span className={`wrap ${isFading ? 'animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn'}`}>
                                {text}
                            </span>
                        </h1>
                        <em><p>In your red eyes I saw Sirens<br/>But I stopped and smelled the cold<br/></p></em>
                        <button onClick={() => window.location.href = '#connect'}>
                            Let's connect<ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
