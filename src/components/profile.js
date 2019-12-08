import React from 'react';
import profilepix from '../images/denky.JPG';

//{require('../images/icons/web18.png')}
 
const Profile = (props) =>
    <div className= 'profile'>
        <img src="https://res.cloudinary.com/diibyv2i7/image/upload/v1565124508/iuwc7flkpmokaowgnygd.jpg" alt='profile pix' className='avatar' />
        <div className='name'> Dennis Ogbonnaya </div>
        <div className='title'> <img src={require('../images/icons/web18.png')}  alt='title'/> Web Developer </div>
        <ul className="skills">
            <li>Node.js</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>MongoDb</li>
            <li>Next.js</li>
        </ul>
        <p className='description'> 
        I am a software developer with focus on web application development, I am skilled and experienced in building dynamic, scalable and 
        responsive web application software, using Javascript, Node.js, Express.js, React.js, Angular, Typescript and MongoDb.
        If you are a business seeking a web presence, or an Employer looking to hire, you can <a href='' onClick= {e => {props.scrollToContact(e)}}> contact me </a> .
         </p>
        <span className='socials' >
            <ul> 
                <li>
                    <a href ='https://github.com/DenkyOgbonnaya' >  <img src= {require('../images/icons/github.png')} alt='github'/> </a>
                </li>
                <li> 
                    <a href ='https://linkedin.com/in/dennis-ogbonnaya' > <img src= {require('../images/icons/linked18.png')} alt='linkedin'/> </a>
                </li>
                <li>
                    <a href ='https://twitter.com/DenkyOgbonnaya' > <img src= {require('../images/icons/twit18.png')} alt='twitter'/> </a>
                </li>
            </ul>
        
          </span>
    </div>

export default Profile;