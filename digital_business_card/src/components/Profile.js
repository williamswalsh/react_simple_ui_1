import React from 'react'
import profile from "../images/me.png"
const Profile = () => {
  return (
    <>
        <img className='profile--photo' src={profile} alt='Profile Photo' />
        <div className='profile--full_name'>William Walsh</div>
        <div className='profile--title'>Fullstack Developer</div>
        <div className='profile--website-name'>williamwalsh.web</div>
        <div className='profile--button-container'>
            <button className="profile--email-button"><i class="fa fa-envelope">  Email</i></button>
            <button className="profile--linkedin-button"><i class="fa fa-linkedin">  LinkedIn</i></button>
        </div>
    </>
  )
}
export default Profile;
