import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json"
import contactAnimation from "../../../src/animation/contact.json"
const Contact = () => {
  const [state, handleSubmit] = useForm("meqyvvnp");

  return (
    <>
     <div className="container" id="contact">
      <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        contact us
      </h1>
      <p className="sub-title">contact us for more information and get notified when i pubulish something new</p>
      <div className="flex" style={{justifyContent: "space-between"}}>
        <form onSubmit={handleSubmit}>

        <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" name="email" id="email" />
            <ValidationError prefix="Email" field="email"errors={state.errors}/>
        </div>

          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError prefix="Message" field="message"errors={state.errors}/>
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting? "submitting...":"submit"}
          </button>
        {state.succeeded && (<h5 className="flex" style={{fontSize: "18px" , marginTop: "1.7rem"}}>
        <Lottie loop={false} style={{height: 37}} animationData={doneAnimation} />
          Your message has been sent successfully
          </h5>)}
        </form>
  
        <div className="animations">
        <Lottie style={{height: 355}} animationData={contactAnimation} className="contact-animation" />
        </div>
      </div>
    </section>
    </div>
    <div className="divider" />
    </>
   
  )
}

export default Contact