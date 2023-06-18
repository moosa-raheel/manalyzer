import React from "react";

export default function Contact() {
  const message = (event) => {
    const nav = document.getElementsByTagName("nav")[0];
    const divmessage = document.createElement("div");
    divmessage.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Submit :</strong> Thanks For Contact Us We will Contact You Soon
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    nav.insertAdjacentElement("afterend", divmessage);
    const button = document.getElementsByClassName("btn-close")[0];
    setTimeout(() => {
      button.click();
    }, 3000);
    event.preventDefault();
  };
  return (
    <>
      <div className="container contact">
        <h1 className="contact-head">Contact Us</h1>
        <div className="form">
          <form onSubmit={message}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter Message Here"
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}
