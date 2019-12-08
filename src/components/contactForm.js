import React, {Component} from 'react';
import {Form, Input, Row, Col, Button, Container} from 'reactstrap';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h3 style= {{color: 'crimson', textAlign: 'center', height: '40px', margin:'20px' }}>
                    I love to hear from you
                </h3>
            <Form action="https://formspree.io/denkyogb@gmail.com" method="POST">
            <Container>
                <Row> 
                    <Col sm={4}> 
                        <Input name='name' value={this.state.name} placeholder='Name'
                        onChange={this.onChange} required />
                    </Col>
                    <Col sm= {4} > 
                        <Input name='email' value={this.state.email} placeholder='Email'
                        onChange={this.onChange} required />
                    </Col>
                    <Col sm={4} > 
                        <Input name='subject' value={this.state.subject} placeholder='Subject'
                        onChange={this.onChange} required />
                        <br />
                    </Col>
                </Row>
                <Row> 
                <Col sm={12}> 
                    <Input type='textarea' name='message' value={this.state.message} placeholder='Message'
                    onChange={this.onChange} required />
                    </Col>
                </Row>
                 
                </Container>
                 
                    <Button color="danger" style= {{margin: '40px'}} > Send Message </Button>
                    
            </Form>
            </div>
        )
    }
}

export default ContactForm;