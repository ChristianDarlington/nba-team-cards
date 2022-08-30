import React from "react";

const TeamCard = (props) => {
  
  return(
    <div className="contact-card">
    <img src={props.avatarUrl} alt='profile'></img>
    <div className='user-details'>
  <p>{props.name}</p>
  <p>{props.email}</p>
  <p>{props.age}</p>
    </div>
   
  </div>
  )

}

export default TeamCard