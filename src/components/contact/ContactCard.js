import React from 'react'
import './ContactCard.css'
const ContactCard = ({mini}) => {
  return (
    <div>
      <>
  <div className="card-container">
    <a  className="hero-image-container">
      <img
        className="hero-image"
        src="https://i.postimg.cc/NfR2yhNs/image-equilibrium.jpg"
        alt="Spinning glass cube"
      />
    </a>
    <main className="main-content">
      <h1>
        <a >{mini.name}</a>
      </h1>
      <p>{mini.lastName}</p>
      <div className="flex-row">
        <div className="coin-base">
          <img
            src="https://i.postimg.cc/T1F1K0bW/Ethereum.png"
            alt="Ethereum"
            className="small-image"
          />
          <h2>{mini.age}</h2>
        </div>
        <div className="time-left">
          <img
            src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png"
            alt="clock"
            className="small-image"
          />
          <p>3 days left</p>
        </div>
      </div>
    </main>
    <div className="card-attribute">
      <img
        src="https://i.postimg.cc/SQBzNQf1/image-avatar.png"
        alt="avatar"
        className="small-avatar"
      />
      <p>
        {mini.email}
        <span>
          <a >more info</a>
        </span>
      </p>
    </div>
  </div>
  
</>

    </div>
  )
}

export default ContactCard
