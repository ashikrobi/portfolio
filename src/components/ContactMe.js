import React from "react";
import {useForm, ValidationError} from "@formspree/react";

const ContactMe = () => {
  let [state, handleSubmit] = useForm("xdoyazyw");
  if (state.succeeded) {
    return (
      <form onSubmit={handleSubmit} className="col-md-3 col-xs-2 m-auto">
        <div className="text-center mt-5 mb-3">
          <h1>CONTACT</h1>
          <p>Have a question or want to work together?</p>
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form-control"
            placeholder="First Name"
          />
          <ValidationError
            prefix="FirstName"
            field="firstName"
            errors={state.errors}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
          <ValidationError
            prefix="LastName"
            field="lastName"
            errors={state.errors}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-3">
          <label htmlFor="textArea" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="text-success">Thanks for your inquiry.</p>
      </form>
    );
  }
  /* 
Main return statement down here. upper return is for only it the form successfully submits.
*/
  return (
    <form onSubmit={handleSubmit} className="col-md-3 col-xs-2 m-auto">
      <div className="text-center mt-5 mb-3">
        <h1>CONTACT</h1>
        <p>Have a question or want to work together?</p>
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          placeholder="First Name"
        />
        <ValidationError
          prefix="FirstName"
          field="firstName"
          errors={state.errors}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          placeholder="Last Name"
        />
        <ValidationError
          prefix="LastName"
          field="lastName"
          errors={state.errors}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mb-3">
        <label htmlFor="textArea" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows="5"></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="mb-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactMe;
