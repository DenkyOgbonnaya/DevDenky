import React from 'react';

const name = '<DevDenky />'
const Profile = (props) =>
    <div className= 'profile'>
            <p className='headline'> 
                <span>  {name}  </span> <br />
                FullStack Web Developer
            </p>
        <p>I am an experienced fullstack web Developer skilled in building dynamic, scalable and responsive websites/webapps.
            My staack includes but not limited to Node/Express, React, Mongo db, JQuery.
        If you are a business seeking a web presence to reach more audience and increase sales, or an 
        Employer looking to hire, you can <a href='/ff' onClick={(e)=> {props.scrollToContact(e)} }>Contact me </a>.</p>
        
    </div>

export default Profile;