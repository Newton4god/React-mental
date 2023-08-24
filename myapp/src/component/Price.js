import React from 'react'
import './price.css'
import { Link } from 'react-router-dom'

const Price = () => {
  return (
    <div>
      <div class="price-category" id="price">
        <h3>Subscriptions/Plans</h3>
        <div class="pricing-plans" id="price">
          <div class="plan">
            <h2>Basic Plan</h2>
            <p class="description">Virtual consultations for individuals</p>
            <ul>
              <li>Unlimited Video Calls</li>
              <li>24/7 Support</li>
              <li>Prescription Renewals</li>
              <li>Health Record Access</li>
              <li>Secure Messaging</li>
              <li>Electronic Prescriptions</li>
              <li>Appointment Reminders</li>
              <li>Medication Management</li>
              <li>Health Tips & Guides</li>
              <li>Easy Payment Options</li>
            </ul>
            <Link to="/">
              <button>Select Plan</button>
            </Link>
          </div>
          <div class="plan">
            <h2>Pro Plan</h2>
            <p class="description">
              Ideal for healthcare professionals and clinics
            </p>
            <ul>
              <li>Unlimited Video Calls</li>
              <li>24/7 Priority Support</li>
              <li>Multi-Device Access</li>
              <li>Patient Management System</li>
              <li>Customizable Waiting Room</li>
              <li>Group Video Conferencing</li>
              <li>Advanced Analytics</li>
              <li>Integration with EMR/EHR</li>
              <li>Secure File Sharing</li>
              <li>TeleHealth API Access</li>
            </ul>
            <Link to="/">
              <button>Select Plan</button>
            </Link>
          </div>

          <div class="plan">
            <h2>Family Plan</h2>
            <p class="description">
              Comprehensive plan for families and households
            </p>
            <ul>
              <li>Unlimited Family Members</li>
              <li>Family Health Monitoring</li>
              <li>Child & Senior Care</li>
              <li>Health Alerts & Notifications</li>
              <li>Shared Health Calendar</li>
              <li>Family Prescription Management</li>
              <li>Family Health Record Sharing</li>
              <li>Secure Video Conferencing</li>
              <li>24/7 Family Support</li>
              <li>Discounts for Multiple Users</li>
            </ul>
            <Link to="/">
              <button>Select Plan</button>
            </Link>
          </div>

          <div class="plan">
            <h2>Premium Plan</h2>
            <p class="description">
              Ultimate solution for businesses and large practices
            </p>
            <ul>
              <li>Unlimited Video Calls</li>
              <li>Custom Branding & White-labeling</li>
              <li>Custom Feature Development</li>
              <li>Business Analytics & Reports</li>
              <li>TeleHealth Training & Onboarding</li>
              <li>HIPAA Compliance</li>
              <li>Advanced Security Features</li>
              <li>Customizable Integration Solutions</li>
              <li>24/7 Dedicated Support</li>
              <li>Scalable and Reliable Infrastructure</li>
            </ul>
            <Link to="/">
              <button>Select Plan</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price