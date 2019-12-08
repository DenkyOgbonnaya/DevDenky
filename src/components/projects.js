import React, {Fragment} from 'react';
import {Row, Container, Col } from 'reactstrap';
  import projects from './projectsData.js';

  const Projects = (props) => {
    return (
      <div className="projects">
        <h3 style= {{ color:"crimson", textAlign: 'center', height: '40px', margin:'20px' }} >My Projects </h3>
      <Container>
        <Row>
          {
            projects.map(project =>
        <Fragment key={project.name}>
              <Col sm="12" md={{size:8, offset:2}} >
              <div className="card mb-3" style={{maxWidth: "750px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={project.cover}  width="200%" height="200px" className="card-img" alt={project.name} />
                  </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{project.stack}</h6>
                    <p className="card-text"> {project.description} </p>
                    <a href={project.website} className="card-link">View app</a>
                    <a href= {project.github} className="card-link">see code</a>
 
                  </div>
                </div>
                </div>
              </div>
          </Col>
          <br />
          </Fragment>
            )
          }
        </Row>
      </Container>
      </div>
    );
  };
  
  export default Projects;