import React from 'react'

const Form = () => {
  return (
   <>
   <form 
   name="contact" 
   method="post" 
   data-netlify="true"
   data-netlify-honeypot="bot-field"
   >
    <input name="name" placeholder="Your Name" type="text" />
    <input name="email" placeholder='name@name.com' type="email" />
    <textarea name= "message" placeholder="I love Duluth Gear Exchange!"/>
    <button>Send</button>
   </form>
   </>
  )
}

export default Form