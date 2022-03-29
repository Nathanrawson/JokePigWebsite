import React from 'react';
import SectionHeader from '../SectionHeader';
import './contactFormCss.css'
import SendGridEmail from '../../../apis/sendGridMail'


function sendEmail() {
    if (!document.getElementById('email').value.length > 0 || !document.getElementById('text').value.length > 0) {
        window.$('.toast').toast('show');
        return;
    }
    document.querySelector('.contact-button').outerHTML = `<div className="spinner-border text-primary"></div>`
    var emailDetails = {
        firstName: document.getElementById('firstName').value,
        surName: document.getElementById('surName').value,
        email: document.getElementById('email').value,
        text: document.getElementById('text').value,
        phoneNumber: document.getElementById('phoneNumber').value,
    };

    const sendEmail = async emailDetails => {
        document.querySelector(".contact-form").outerHTML = `<div class="contact-form"><div><h2 style="margin-top: 90%; text-align: center;">Thank you for your message!</h2></div></div>`
        await SendGridEmail.get('', {
            params: emailDetails,
        });
    }

    sendEmail(emailDetails);
}

const ContactForm = () => {
    return (
        <div> <SectionHeader h1="Join Pig Cult" h3="Call Me!" /><div className="contact-details"><div className="contact-overlay">
            <div className="contact-details-section">
                <h3 className="contact-details-text"><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h3>
                <p>Farmers market, Welwyn Garden City</p>
            </div>
            <div className="contact-details-section">
                <h3 className="contact-details-text"><i className="fa fa-phone" aria-hidden="true"></i> Lets Talk</h3>
                <p>Call on 01707888888</p>
            </div>
            <div className="contact-details-section">
                <h3 className="contact-details-text"><i className="fa fa-envelope-o" aria-hidden="true"></i> Get Me By Email</h3>
                <p>porkinton@pigcult.com</p>
            </div>
        </div><div></div></div>
            <div className="contact-form">
                <form>
                    <div>
                        <h2 className="centre contact-title">Send Me A Message!</h2>
                    </div>
                    <div className="contact-box">
                        <h3 className="contact-box-title">Whats your name?*</h3>
                        <div className="input-group">
                            <input id="firstName" placeholder="First Name" className="contact-input form-control" required />
                            <input id="surName" placeholder="Surname" className="contact-input form-control" required />
                        </div>
                    </div>

                    <div className="contact-box">
                        <h3 className="contact-box-title">Enter Your Email*</h3>
                        <div className="input-group">
                            <input id="email" placeholder="" className="contact-input form-control" required />
                        </div>
                    </div>

                    <div className="contact-box">
                        <h3 className="contact-box-title">Enter Your Phone Number</h3>
                        <div className="input-group">
                            <input id="phoneNumber" placeholder="" className="contact-input form-control" />
                        </div>
                    </div>

                    <div className="contact-box">
                        <h3 className="contact-box-title">Message*</h3>
                        <div className="input-group">
                            <textarea id="text" placeholder="Write Your Message" className="contact-textarea form-control" required></textarea>

                        </div>
                    </div>
                    <div className="centre">
                        <button type="submit" onClick={sendEmail} className="contact-button btn btn-success">Send Message</button>
                        <div style={{ backgroundColor: 'red', color: "white", textAlign: "center", marginLeft: "20%", marginRight: "20%" }} class="toast">

                            <div style={{ color: "white" }} class="toast-body">
                                Please fill in all required (*) fileds
   </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactForm