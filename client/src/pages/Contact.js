import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="container-fluid row mt-3 home-page" style={{ paddingTop: '80px' }}>
        <div className="col-md-6">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.999161912016!2d77.2798864!3d28.6602815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc759b4e6cf1%3A0xa3bf01b5e61dfb65!2sF15%2F6%2C%20Krishna%20Nagar%2C%20Delhi%20110051!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Tyohar Location"
          ></iframe>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Have any queries or need information about our products? Feel free to reach out to us! We are available during our business hours to assist you.
          </p>
          <p className="mt-3">
            <BiMailSend /> : help@tyohar.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +919318391068
          </p>
          <p className="mt-3">
            <BiSupport /> : Business Hours: 11:00 AM - 7:00 PM (Monday - Saturday)
          </p>
          <p className="mt-3">
            <strong>Address:</strong> F15/6, Third Floor, Krishna Nagar, Delhi 10051
          </p>
          <h5 className="mt-4">Follow Us</h5>
          <p className="mt-3">
            <a href="https://www.facebook.com/share/WCjm88oezBmX7U6x/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
          <p className="mt-3">
            <a href="https://www.instagram.com/tyohar_bydr.apoorva/profilecard/?igsh=MTQyenZmZ3picTMwZQ==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
