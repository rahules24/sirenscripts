import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col md={4} sm={6}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt={title}/>
            <div className="proj-txtx">
                <a href={link} target="blank"><h4>{title}</h4></a>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard