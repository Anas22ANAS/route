import React from "react";
import './contact.css'

export default function Contact() {
  return (
    <>
        <h2 className=" text-center mb-3 Portfolo">CONTACT ME</h2>
        <div className="line-start">
            <div className="line_1"></div>
            <div className="start_1"><i class="fas fa-star"></i></div>
            <div className="line_1"></div>
            </div>
            <div className="container d-flex justify-content-center align-items-center text-center">
                <form action="" className="form-group">
                    <input type="text" placeholder="name" required />
                    <input type="email" placeholder="email" required />
                    <input type="number" placeholder="phone" required />
                    <input type="text" placeholder="country" required />
                    <textarea name="" id="" placeholder="massage"></textarea>
                    <button className="btn  button_1" type="submit">sent</button>
                </form>
            </div>
    </>
  );
}
