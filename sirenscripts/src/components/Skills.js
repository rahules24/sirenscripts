import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
        <section id="skills" className='skill'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p><i>
                            Skills like constellations illuminate the night sky of potential. Python flows effortlessly, guided by Django and FastAPI, while React dances in harmony with Tailwind’s design. C++ stands strong, a sturdy foundation beneath the swirling data of MongoDB and MySQL. R, SPARQL, and RDF unravel complex truths, as DSA sharpens logic's edge. Docker encapsulates innovation, while Matplotlib, JointJS, and NumPy craft visuals and connections. Blazegraph unlocks insights, each skill a brushstroke on the canvas of creation, ready to bring ideas to life.
                            </i></p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image" />
                                    <h5>Software Engineering</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt="Image" />
                                    <h5>Database Management</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt="Image" />
                                    <h5>Python Programming</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left' />
        </section>
    )
}

export default Skills