import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleClick = (e) => {
    if (title === "SirenScripts") {
      e.preventDefault();
  
      const downloadExe = window.confirm("Do you want to download SirenScripts.exe?");
      
      if (downloadExe) {
        window.location.href = "https://github.com/rahules24/sirenscripts/releases/download/v1.0/SirenScripts.exe";
      } else {
        const downloadPy = window.confirm("Would you want to download the souce code instead?");
        
        if (downloadPy) {
          window.location.href = "https://github.com/rahules24/sirenscripts/releases/download/v1.0/SirenScripts.7z";
        }
      }
    }
  };  

  return (
    <Col md={4} sm={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <a href={link} target="_blank" onClick={handleClick}>
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
