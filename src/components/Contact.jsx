import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const [submit, setSubmit] = useState("Submit");
    const [disable, setDisable] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setSubmit("Submitted")

        emailjs.sendForm('service_exsycyf', 'template_rh9neso', form.current, 'bD1ZFHucnev4gHelF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setDisable(true)

    };

    return (
        <div id="contact-form">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title-container">
                            <h2 className="content-title"> Contact Me </h2>
                            <p> If you want to hire me or just fancy saying hey, then get in touch ! </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container form-container">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" id="name" name="from_name" placeholder="Name" />

                                <input type="email" id="email" name="from_email" placeholder="Email" />

                                <textarea id="message" name="message" placeholder="How Can I Help?"></textarea>

                                <button className="btn btn-dark submit-btn" id="submit" disabled={disable}> {submit} </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;