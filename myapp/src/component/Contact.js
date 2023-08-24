import React from "react";
import "./contact.css"
import { Link } from "react-router-dom";


const Contact = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Get form input values
    const name = event.target.elements.name.value.trim();
    const email = event.target.elements.email.value.trim();
    const subject = event.target.elements.subject.value.trim();
    const message = event.target.elements.message.value.trim();

    // Form validation
    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all the fields.');
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      alert('Please enter a valid name containing only letters and spaces.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (subject.length < 3) {
      alert('Subject must have at least 3 characters.');
      return;
    }

    if (message.length < 10) {
      alert('Message must have at least 10 characters.');
      return;
    }

    // If all validations pass, you can proceed with form submission logic here
    console.log("Form submitted successfully!");
  };


  return (
    <>
      {/* Contact Form */}
      <div className="contact-form" id="contact">
        <h1>Contact Us</h1>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            {/* <button type="submit">Submit</button> */}
            <div className="links">
              <Link to="https://wa.me/+3530899481689">Submit</Link>
            </div>
          </form>
        </section>
      </div>

      {/* Footer Section */}

      {/* Additional JavaScript or external scripts can be added here */}
      {/* For example, you can include external scripts with the help of React Helmet */}
    </>
  );
};

export default Contact;
