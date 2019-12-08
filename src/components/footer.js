import React from 'react';
import {Container, Row, Col} from 'reactstrap';
const Footer = (props) => 
    <div className= 'footer'> 
        <Container> 
            <Row> 
                <Col xs={6}>
                <div className= 'footer'>
                <h4>Quick Links </h4>
                <ul>
                    <li><a href ='/ff' onClick= {(e) => props.scrollToContact(e)}> Contact </a> </li>
                    <li><a href ='/ff' onClick= {(e) => props.scrollToProjects(e)} > Projects </a> </li>
                    <li><a href ='/ff' onClick= {(e) => props.scrollToProfile(e)}> Profile </a> </li>
                </ul>
                </div> 
                </Col>
                <Col xs={6}>
                <div className= 'footer' >
                <h4>Contacts </h4>
                <ul>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=2347069797882" ><img src={require('../images/icons/whatsapp.png')} alt=""  />Whatsapp </a> 
                    </li>
                    <li>
                        <a href ='https://twitter.com/DenkyOgbonnaya'> <img src={require('../images/icons/twitter.png')} alt='' />Twitter </a> 
                    </li>
                    <li>
                        <a href ='https://github.com/DenkyOgbonnaya'> <img src={require('../images/icons/github.png')} alt='' /> Github </a> 
                    </li>
                    <li>
                        <a href ='https://linkedin.com/in/dennis-ogbonnaya-313148103'> <img src={require('../images/icons/linkedin.png')} alt='' /> LinkedIn </a> 
                    </li>
                </ul>
                </div >
                </Col>
            </Row>
            <Row> 
                <Col>
                    <div className='footer' style= {{textAlign: 'center'}} > 
                    ©{new Date().getFullYear()} Dennis Ogbonnaya
                    </div> 
                </Col>
            </Row>
        </Container>
    </div>

 export default Footer;