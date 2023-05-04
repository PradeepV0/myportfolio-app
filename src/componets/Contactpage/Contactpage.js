import React, { useState } from "react";
import "./Contactpage.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineWhatsApp, AiTwotonePhone } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contactpage() {
  // -------------------------------
  const [loader, setLoader] = useState(true);
  const success = () => {
    toast.success("👍Successfully Message sended", {
      position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 1,
      theme: "dark",
    });
  };
  // -------------------------------
  const form = useRef();
  // -------------------------------
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(false);
    emailjs
      .sendForm(
        "service_5ckpq99",
        "template_p6bqd8g",
        form.current,
        "Cnl8sDK-kyPc10Tr8"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset();
          setLoader(true);
          if (result.text) {
            success();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // -------------------------------
  return (
    <div className="contactbackground">
      <div className="Contact">
        {/* -------------------------- */}
        
          {/* -------------------------- */}
          <div className="row contact-row">
          <div className="col-md-12 ">
            {/* -------------------------- */}
         
          
            {/* -------------------------- */}
            <div className="input-form">
              {/* -------------------------- */}
              <div className="contact-form">
                {/* -------------------------- */}
                <h2 className="contact-me">
                  Contact Me <AiTwotonePhone className="contact-icon" />
                </h2>
                {/* -------------------------- */}
                <form ref={form} onSubmit={sendEmail} className="contact">
                  {/* -------------------------- */}
                  <div className="input-div">
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label"><span>Name</span></label>
                      <br></br>
                      <input
                        type="text"
                        name="user_name"
                        className="text-box"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label">Email</label>
                      <br></br>
                      <input
                        type="email"
                        name="user_email"
                        className="text-box"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                    <div>
                      <label className="input-label">Message</label>
                      <br></br>
                      <textarea
                        name="message"
                        className="text-box"
                        placeholder="Your Message"
                        required
                      />
                    </div>
                    {/* -------------------------- */}
                  </div>
                  {/* -------------------------- */}
                  {loader ? (
                    <div className="send-button">
                      <button
                        type="submit"
                        name="submit"
                        className="send-btn"
                        value="SEND"
                      >
                        SEND <IoMdSend />
                      </button>
                    </div>
                  ) : (
                    <div className="send-button">
                      <button
                        type="submit"
                        name="submit"
                        className="send-btn"
                        value="SEND"
                      >
                        <div class="submit-btn-loader"></div>
                      </button>
                    </div>
                  )}

                  {/* -------------------------- */}
                </form>
                {/* -------------------------- */}
              </div>
              {/* -------------------------- */}
            </div>
            
           
            {/* -------------------------- */}
         
            {/* -------------------------- */}
          </div>
          {/* -------------------------- */}
        </div>
        <div className="row socil-media">
        <div className="col-md-12">
              <ul>
                <li><a><AiOutlineInstagram className="insta-icon"/></a></li>
                <li><a><AiFillLinkedin className="linkedin-icon"/></a></li>
                <li><a><AiOutlineGithub className="git-icon" /></a></li>
                <li><a><AiOutlineWhatsApp className="whatsapp-icon"/></a></li>
              </ul>
            </div>
        </div>
        {/* -------------------------- */}
      </div>
      {/* -------------------------- */}
      <p className="copyright">
      © PRADEEP V. All right reserved
            </p>
    </div>
  );
}

export default Contactpage;