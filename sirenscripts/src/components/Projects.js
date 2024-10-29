import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg1 from '../assets/img/aop_2.png';
import projImg2 from '../assets/img/JSproj2.png';
import projImg3 from '../assets/img/Acer2.jpg';

const Projects = () => {

    const jsprojects = [
        {
            title: 'AOP-Sketchpad',
            description: 'A proof-of-concept tool for publishing Adverse Outcome Pathways using FAIR guidelines.',
            imgUrl: projImg1,
            link: 'https://dev.aopsketchpad.insilicohub.org/'
        },
        {
            title: 'RextUtils',
            description: 'Made exclusively in React, with react-bootsrap!',
            imgUrl: projImg2,
            link: 'https://rahules24.github.io/rextutils'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
    ]
    const pyprojects = [
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
    ]
    const litprojects = [
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: projImg3,
            // link: '#'
        },
    ]

  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2>
                        Projects
                    </h2>
                    <p><i>In the realm of Magical Realism, projects emerge like whispers of the wind, cradled in the heart of creation. Python weaves tales through Django's embrace, Flask's elegant simplicity and FastAPI's swift dance, while JavaScript ignites stories with React's vibrant hues and Node's steady pulse. Literature flows like gentle rain—poems, and Chronicles paints the sky with dreams, each word a step into the ethereal tapestry of imagination. Here, every endeavor breathes life, a symphony of code and verse, waiting to unfurl its wings and soar into the horizon of possibility.</i></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">JavaScript</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Python</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Arts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        jsprojects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />

                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        pyprojects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                                
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {
                                        litprojects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects