import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Container, Col } from 'reactstrap';


  const Projects = (props) => {
    return (
      <div>
        <h3 style= {{background: '#ecf0f1', textAlign: 'center', height: '40px', margin:'20px' }} >My Projects </h3>
      <Container>
        <Row>
          <Col xm='12' md='5'>
        <Card>
          <CardBody>
            <CardTitle><h4>HiBooks </h4></CardTitle>
            <CardSubtitle>
            <small className="text-muted"> *Node/Express *React *Mongo *Bootstrap </small>
            </CardSubtitle>
          </CardBody>
          <CardImg  src={require('../images/hibooks.png')} alt="Project HiBooks" />
          <CardBody>
            <CardText>A simple application for managing a librey and its processes like finding, tracking, 
              renting and returning HiBooks.
            </CardText>
            <CardLink href="http://hibooks.herokuapp.com">Website</CardLink>
            <CardLink href="https://github.com/DenkyOgbonnaya/HiBooks">GitHub</CardLink>
          </CardBody>
        </Card>
        <br />
          </Col>
          <Col xm='12' md='5'>
        <Card>
          <CardBody>
            <CardTitle> <h3>Stolencars </h3> </CardTitle>
            <CardSubtitle>
            <small className="text-muted"> *Node/Express *Mongo *JQuery *Html *Css </small>
            </CardSubtitle>
          </CardBody>
          <CardImg  src={require('../images/stolencars.png')} alt="Project HiBooks" />
          <CardBody>
            <CardText>An online database for reporting stolen cars in Nigeria, check car theft status before 
              purchas decode vehicle identification number for basic information as year of manufacture,
              manufacturer, body style and engine type.
            </CardText>
            <CardLink href="http://stolencars.herokuapp.com">Website</CardLink>
            <CardLink href="https://github.com/DenkyOgbonnaya/stolencarsNg">GitHub</CardLink>
          </CardBody>
        </Card>
        <br />
          </Col >
          <Col xm='12' md='5' >
          <Card>
          <CardBody>
            <CardTitle> <h3>This portfolio </h3> </CardTitle>
            <CardSubtitle>
            <small className="text-muted"> *React </small>
            </CardSubtitle>
          </CardBody>
          <CardImg  src={require('../images/devdenky.png')} alt="Project HiBooks" />
          <CardBody>
            <CardText> A simple portfolio that showcase my software products
            </CardText>
            <CardLink href="https://github.com/DenkyOgbonnaya/DevDenky">GitHub</CardLink>
          </CardBody>
        </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  };
  
  export default Projects;