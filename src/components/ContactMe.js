import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import './ContactMe.css';
const inputStyle = {
  backgroundColor: "#1E242C",
  color: "#757575",
  border: "none",
};

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  let [state, handleSubmit] = useForm("xdoyazyw");
  if (state.succeeded) {
    return (
      <div
        style={{ backgroundColor: "#252934", minHeight: "700px" }}
        className='d-flex align-items-center'>
        <form onSubmit={handleSubmit} className='col-md-3 col-xs-2 m-auto'>
          <div className='text-center'>
            <h1 className='text-white mb-3'>CONTACT</h1>
            <p className='text-info mb-4'>
              Have a question or want to work together?
            </p>
          </div>
          <div className='mb-3'>
            <input
              id='name'
              name='name'
              type='text'
              className='form-control'
              placeholder='Name'
              style={inputStyle}
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
          <div className='mb-3'>
            <input
              id='email'
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              style={inputStyle}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='mb-3'>
            <textarea
              id='message'
              name='message'
              className='form-control mb-4'
              rows='5'
              placeholder='Your Message'
              style={inputStyle}></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              disabled={state.submitting}
              className='btn btn-outline-danger'>
              Submit
            </button>
          </div>
          <p className='text-success'>Thanks for your inquiry.</p>;
        </form>
      </div>
    );
  }

  /* 
Main return statement down here. upper return is for only it the form successfully submits.
*/
  return (
    <div
      style={{ backgroundColor: "#252934", minHeight: "700px" }}
      className='d-flex align-items-center'>
      <form onSubmit={handleSubmit} className='col-md-3 col-xs-2 m-auto'>
        <div className='text-center'>
          <h1 data-aos='fade-right' className='text-white mb-3 contact-bottom-border'>
            CONTACT
          </h1>
          <p data-aos='fade-left' className='text-info mb-4'>
            Have a question or want to work together?
          </p>
        </div>
        <div data-aos='zoom-in'>
          <div className='mb-3'>
            <input
              id='name'
              name='name'
              type='text'
              className='form-control'
              placeholder='Name'
              style={inputStyle}
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>
          <div className='mb-3'>
            <input
              id='email'
              type='email'
              name='email'
              className='form-control'
              placeholder='Enter Email'
              style={inputStyle}
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
          </div>
          <div className='mb-3'>
            <textarea
              id='message'
              name='message'
              className='form-control mb-4'
              rows='5'
              placeholder='Your Message'
              style={inputStyle}></textarea>
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <div className='mb-3'>
            <button
              type='submit'
              disabled={state.submitting}
              className='btn btn-outline-danger'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
