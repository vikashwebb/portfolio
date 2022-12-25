import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Header from "../Component/Header";
import Footer from "../Component/Footer";


function Contact() {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  


  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // data.preventDefault();
    // Destrcture data object
    const { name, email, subject, message, mobile } = data;
    console.log('hello onsubmit is hits',  name, email, subject, message)
    try {
      await emailjs.sendForm('service_1wp73qg', 'template_880ycjm', form.current, 'Wr1p_JOLoNYLE_rxr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
      reset();
      toastifySuccess();
    } catch (data) {
      console.log(data);
    }
  };



  return (
    <>
      <Header />
      <div className="section contact wf-section">
        <div className="container-medium-838px w-container">
          <div className="top-content contact-title-wrapper">
            <h1>Contact me</h1>
            <p>
            Have an idea or an epic project in mind? Talk to me. 
             Let’s work together and make something great.
            </p>
          </div>
          <div className="contact-form-block w-form">
            <form
              id="wf-form-Contact-Form" 
              data-name="Contact Form"
              method="get"
              ref={form} 
              className="contact-form"
              onSubmit={handleSubmit(onSubmit)} noValidate
            >
              <div className="_2-column-grid contact-form-grid">
                <div className="input-wrapper">
                  <label for="name" className="field-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input w-input"
                    maxlength="256"
                    name="name"
                    data-name="Name"
                    placeholder="Full Name"
                    id="name"
                    required=""
                    {...register('name', {
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                  />
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>
                <div className="input-wrapper">
                  <label for="email" className="field-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input w-input"
                    maxlength="256"
                    name="email"
                    data-name="Email"
                    placeholder="contact@you.com"
                    id="email"
                    required=""
                    {...register('email', {
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                  />
                  {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
                <div className="input-wrapper">
                  <label for="Phone" className="field-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="input w-input"
                    maxlength="10"
                    name="Phone"
                    data-name="mobile"
                    placeholder="9898989898"
                    id="mobile"
                    required=""
                    {...register('mobile', {
                      required: true,
                      pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                    })}
                  />
                  {errors.mobile && (
                      <span className='errorMessage'>Please enter a valid mobile</span>
                    )}
                </div>
                <div className="input-wrapper">
                  <label for="email-3" className="field-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="input w-input"
                    maxlength="256"
                    name="Subject"
                    data-name="Subject"
                    placeholder="Ex. New Project"
                    id="subject"
                    required=""
                    {...register('subject', {
                      required: { value: true, message: 'Please enter a subject' },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters'
                      }
                    })}
                  />
                  {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                </div>
                <div
                  id="w-node-f82ec180-bc5b-600a-335c-94536fe545ed-7d0d2171"
                  className="input-wrapper message"
                >
                  <label for="Message" className="field-label">
                    Message
                  </label>
                  <textarea
                    placeholder="Please write your message..."
                    maxlength="5000"
                    id="Message"
                    name="Message"
                    data-name="Message"
                    className="text-area w-input"
                    {...register('message', {
                      required: true
                    })}
                  ></textarea>
                   {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
                <div
                  id="w-node-eb605a8d-f5d9-6c80-b8d8-d6ae968ae78e-7d0d2171"
                  className="input-wrapper button"
                >
                  <input
                    type="submit"
                    value="Send Message"
                    data-wait="Please wait..."
                    className="button-primary contact w-button"
                  />
                </div>
              </div>
            </form>
            <ToastContainer />
            <div className="success-message contact w-form-done">
              <div className="split-content contact-form-success-message">
                <h2 className="title contact-form-success-message">
                  Your message has been submitted.
                </h2>
                <img
                  src="images/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template_jhd366bk5ne2zam5v2m43t.svg"
                  loading="lazy"
                  alt=""
                  className="image contact-success-message"
                />
                <div>
                  I will get back to you within 24-48 hours.
                  <br />
                  elit, sed do eiusmod tempor incididunt ut.
                </div>
              </div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
