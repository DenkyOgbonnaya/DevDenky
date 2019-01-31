import React, { Component } from 'react';
import './App.css';
import Projects from './components/projects';
import ContactForm from './components/contactForm';
import Footer from './components/footer';
import Profile from './components/profile';



class App extends Component {
 contactRef = React.createRef();
 projectsRef = React.createRef();
 profileRef = React.createRef();

 scrollToContact = (e) => {
  window.scrollTo(0, this.contactRef.current.offsetTop);
  e.preventDefault();
}
 
scrollToProjects = (e) => {
  window.scrollTo(0, this.projectsRef.current.offsetTop);
  e.preventDefault();
}
scrollToProfile = (e) => {
  window.scrollTo(0, this.profileRef.current.offsetTop);
  e.preventDefault();
}

  render() {
    return (
      <div className="App">
        <span ref={this.profileRef}> </span>
        <Profile scrollToContact= {this.scrollToContact} />
        <br />
        <div ref={this.projectsRef}> </div>
        <Projects />

        <div ref={this.contactRef}> </div>
        <ContactForm />

        <Footer scrollToProfile= {this.scrollToProfile} scrollToProjects= {this.scrollToProjects} 
          scrollToContact= {this.scrollToContact}
        />
      </div>
    );
  }
}

export default App;
