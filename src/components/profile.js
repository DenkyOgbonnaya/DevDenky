import React from 'react';

const name = '<Dennis Ogbonnaya />'
const Profile = (props) =>
    <div className= 'profile'>
            <p className='headline'> 
                <span>  {name}  </span> <br />
                Web Developer
            </p>
        <p>I am an experienced Web Developer skilled in building dynamic, scalable and responsive websites/web apps, using
            modern day JavaScript, FrameWorks and Libraries.
        If you are a business seeking a web presence to reach more audience and increase sales, or an 
        Employer looking to hire, you can <a href='/ff' onClick={(e)=> {props.scrollToContact(e)} }>Contact me </a>.</p>
        
    </div>

export default Profile;