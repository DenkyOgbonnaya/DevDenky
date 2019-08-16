import React from 'react';
import profilepix from '../images/denky.JPG';
 
const Profile = (props) =>
    <div className= 'profile'>
        <img src={profilepix} alt='profile pix' className='avatar' />
        <div className='name'> Dennis Ogbonnaya </div>
        <div className='title'> <img src= {require('../images/icons/web18.png')} alt='title'/> Web Developer </div>
        <p className='description'> 
        I am a software developer focused on web, I build dynamic, scalable and 
        responsive web application software using modern day JavaScript, Frameworks 
        and Libraries. If you are a business seeking a web presence to reach more 
        audience or an Employer looking to hire, you can <a href='' onClick= {e => {props.scrollToContact(e)}}> contact me </a> .
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