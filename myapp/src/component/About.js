import React from 'react';
import "./about.css"
import { useState } from 'react';


const About = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= testimonials.length) {
        return 0;
      } else if (newIndex < 0) {
        return testimonials.length - 1;
      }
      return newIndex;
    });
  };

  const testimonials = [
    {
      image: './img/testimonial-2.jpg',
      name: 'John Doe',
      comment: 'Exceptional care and convenience! Using TeleDoc has been a game-changer for me. I received professional medical advice from the comfort of my home. Highly satisfied',
    },
    {
      image: './img/testimonial-1.jpg',
      name: 'Jane Smith',
      comment: 'Life-saving platform! TeleHealth Plus played a crucial role in managing my chronic condition. The virtual consultations were efficient, and the doctors were compassionate. Grateful for this service!',
    },
    {
      image: './img/testimonial-3.jpg',
      name: 'Alice White',
      comment: 'Top-notch telemedicine service! HealthConnect has made healthcare accessible and hassle-free. The user-friendly interface, quick appointments, and prompt responses from doctors. I\'ll definitely recommend it to friends and family!',
    },
  ];


  return (
    <>
      <div className="about" id="about">
        <div className="about-header">
          About Our <span>Online Mental Health Services</span>
        </div>

        {/* About */}
        <div className="about-us">
          <div className="us">
            <h2 className="">Who We Are</h2>
            <p>
              Welcome to our Online Mental Health platform! We are a team of dedicated
              healthcare professionals who believe in providing quality and
              convenient health care service to everyone.
            </p>
            <p>
              With our Telemedicine solutions, we aim to bridge the gap between
              patients and healthcare providers, making quality medical services
              available to everyone at the comfort of your home.
            </p>
          </div>

          <div className="head-img">
            <img src="./img/team-2.jpg" alt="" />
            <h3 className="text-center py-5">Team Lead</h3>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mission-container">
        <div className="us">
          <h2>Our Mission</h2>
        </div>
        <div className="mission-content">
          <p>
            Our mission is to provide and revolutionize the way mental healthcare is
            delivered by leveraging cutting-edge technologies and
            telecommunications.
            <span>
              We strive to improve patients outcomes, reduce healthcare costs,
              and enhance the overall patient experience by offering secure and
              reliable Online Mental Health services
            </span>
          </p>
        </div>
      </div>

      {/* Offer */}
      <div className="offer ">
        <h2 className="us">What We Offer</h2>
        <div className="offer-content">
          <div className="offers">
            <p>
              At our online mental health platform, we offer a wide range of
              telemedicine services to cater to your mental healthcare needs. Our
              services include:
            </p>
            <ul>
              <li>Teleconsultations with qualified healthcare providers</li>
              <li>Remote monitoring and management of chronic conditions</li>
              <li>Prescription and medication management</li>
              <li>Second opinions from specialists</li>
              <li>Wellness and lifestyle coaching</li>
            </ul>
          </div>
          <div className="offers">
            Our user-friendly platform allows you to schedule appointments,
            securely communicate with healthcare professionals, access your
            medical records, and many more, all from the convenience of your
            smartphone or computer.
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="team">
        <div className="team-container">
          <div className="team-top">
            <h2>Our Team</h2>
            <p>
              Our team is comprised of licensed and experienced healthcare
              professionals, including doctors, nurses, and specialists, who are
              passionate about providing high-quality healthcare services
              through telemedicine. We adhere to strict ethical standards and
              privacy regulations to ensure your medical information remains
              confidential and secure.
            </p>
          </div>

          <div className="team-members">
            <div className="box">
              <img src="./img/team-1.jpg" alt="" width="150" />
              <h3>Team Lead</h3>
              <h5>John Doe</h5>
            </div>

            <div className="box">
              <img src="./img/team-2.jpg" alt="" width="150" />
              <h3>Neurologist</h3>
              <h5>John Doe</h5>
            </div>

            <div className="box">
              <img src="./img/team-3.jpg" alt="" width="150" />
              <h3>Doctor</h3>
              <h5>John Doe</h5>
            </div>

            <div className="box">
              <img src="./img/user.jpg" alt="" width="150" />
              <h3>Lab Attendant</h3>
              <h5>John Doe</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Why US */}
      <div className="why-us">
        <div className="why-us-container">
          <div className="left">
            <h2>Why Choose Online Mental Health Platform</h2>
            <p>
              Online Mental Health Platform offers numerous benefits, including:
            </p>

            <ul>
              <li>
                Convenience: No more commuting or waiting in crowded waiting
                rooms. Access healthcare from anywhere, anytime.
              </li>
              <li>
                Accessibility: Online Mental Health platform eliminates geographic barriers,
                making healthcare accessible to rural and remote communities.
              </li>
              <li>
                Time-Saving: Reduce time off work and spend more time with your
                loved ones by avoiding unnecessary travel.
              </li>
              <li>
                Cost-Effective: Online Mental Health consultations can be more affordable
                than in-person visits and can save on transportation costs.
              </li>
              <li>
                Continuity of Care: Stay connected with your regular healthcare
                providers, even when you're unable to visit them in person.
              </li>
              <li>
                Improved Mental Health Outcomes: Timely access to healthcare can lead
                to early detection and better management of health conditions.
              </li>
            </ul>
          </div>
          <div className="right">
            <p>
              Our Online Mental Health platform is designed to deliver all these benefits
              while maintaining the highest standards of patient care and
              privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="slider-container">
        <h5>Testimonials</h5>
        <div className="slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                slideIndex === index ? "active-slide" : ""
              }`}
            >
              <div className="image-container">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
        <div className="slider-navigation">
          <button className="prev-btn" onClick={() => changeSlide(-1)}>
            &lt;
          </button>
          <button className="next-btn" onClick={() => changeSlide(1)}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
