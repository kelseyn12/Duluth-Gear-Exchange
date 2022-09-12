import React from 'react'

const Map = () => {
  return (
    <>
    <div className="map">
    <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.488688785247!2d-92.09797224906458!3d46.794678779036836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ae5385203a5995%3A0xf62e37ca7dfda8a3!2sGreat%20Lakes%20Gear%20Exchange!5e0!3m2!1sen!2sus!4v1658770129214!5m2!1sen!2sus" width="600" height="550" style= {{ padding: 0, margin: 0, borderTop: '1px solid #808080', border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Map