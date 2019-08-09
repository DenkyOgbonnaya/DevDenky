import React, {Fragment} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Container, Col } from 'reactstrap';
  import projects from './projectsData.js';

  const Projects = (props) => {
    return (
      <div>
        <h3 style= {{background: '#ecf0f1', textAlign: 'center', height: '40px', margin:'20px' }} >My Projects </h3>
      <Container>
        <Row>
          {
            projects.map(project =>
        <Fragment key={project.name}>
              <Col xm='12' md={{size: 5, offset:1 }}>
        <Card >
          <CardBody>
            <CardTitle><h4>{project.name} </h4></CardTitle>
            <CardSubtitle>
            <small className="text-muted"> {project.stack} </small>
            </CardSubtitle>
          </CardBody>
          <CardImg top width="100%" height="200px"  src= {project.cover} alt="Project HiBooks" />
          <CardBody style={{height:'150px'}}>
            <CardText>{project.description} </CardText>
            <CardLink href={project.website}>Website</CardLink>
            <CardLink href={project.github}>GitHub</CardLink>
          </CardBody>
        </Card>
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