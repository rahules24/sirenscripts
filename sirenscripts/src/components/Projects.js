import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
// import echo from '../assets/img/echox2.jpg';
import echo from '../assets/img/echo.png';
import rextutils from '../assets/img/rextutils.jpeg';
import dextutils from '../assets/img/dextutils.jpeg';
import projImg3 from '../assets/img/Acer2.jpg';
import game from '../assets/img/gamecolor.jpg';
import takemichi from '../assets/img/takemichi.jpeg';
import sirens from '../assets/img/sirens.jpeg';
import bandbox from '../assets/img/bandbox.png'
const Projects = () => {

    const jsprojects = [
        {
            title: 'echoSketch',
            description: 'An indie drawing app to let your creativity run wild <33',
            imgUrl: echo,
            link: 'https://rahules24.github.io/echosketch/'
        },
        {
            title: 'RextUtils',
            description: 'Made exclusively in React, with react-bootsrap!',
            imgUrl: rextutils,
            link: 'https://rahules24.github.io/rextutils'
        },
        {
            title: 'Band Box Drycleaners',
            description: 'Full-stack app powered by Django REST Framework (Fly.io) with a sleek React + TypeScript frontend live on GitHub Pages. ',
            imgUrl: bandbox,
            link: 'https://rahules24.github.io/bandboxdrycleaners/'
        },
    ]
    const pyprojects = [
        {
            title: 'DextUtils',
            description: 'Made exclusively in Django xd',
            imgUrl: dextutils,
            link: 'https://dextutils.onrender.com/'
        },
        {
            title: 'Takemichi',
            description: '20 Vector graphics made in Turtle and hosted on trinket.io',
            imgUrl: takemichi,
            link: 'https://rahules24.github.io/takemichi/'
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
            title: 'SirenScripts',
            description: 'Click to download the terminal app xp',
            imgUrl: sirens,
            link: '/'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: game,
            // link: '#'
        },
        {
            title: 'Coming Soon',
            description: 'Like the whisper of wind, something stirs on the horizon—coming soon, a force yet unseen!',
            imgUrl: game,
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
                                <Nav.Link eventKey="first">WebDev</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Python</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">GameDev</Nav.Link>
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