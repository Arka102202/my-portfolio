import React, { useEffect, useState, useRef } from "react";

import mailBlack from "../assets/logo/email.png";
import mailWhite from "../assets/logo/email-white.png";
import phoneBlack from "../assets/logo/phone.png";
import phoneWhite from "../assets/logo/phone-white.png";
import loadingBlack from "../assets/logo/loading.png";
import loadingWhite from "../assets/logo/loading-white.png";

const ContactMe = (props) => {
  const mail = props.mode ? mailBlack : mailWhite;
  const phone = props.mode ? phoneBlack : phoneWhite;
  const loading = props.mode ? loadingWhite : loadingBlack;
  const nameRef = useRef();
  const emailRef = useRef();
  const detailsRef = useRef();
  const extrasRef = useRef();
  const [y, setY] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [clsName, setClsName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  let msg, cls;

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowSpinner(true);

    if (nameRef.current.value.trim() === "") {
      nameRef.current.classList.add("error");
      nameRef.current.value = "";
      nameRef.current.placeholder = "Please enter a name";
      setShowSpinner(false);
      return;
    }
    if (emailRef.current.value.trim() === "") {
      emailRef.current.classList.add("error");
      emailRef.current.value = "";
      emailRef.current.placeholder = "Please enter email";
      setShowSpinner(false);
      return;
    }

    const res1 = await fetch(
      `https://emailvalidation.abstractapi.com/v1/?api_key=eeba9f63aca64f589888cf560efdba04&email=${emailRef.current.value}`
    );
    const result = await res1.json();

    if (result.deliverability !== "DELIVERABLE") {
      emailRef.current.classList.add("error");
      emailRef.current.value = "";
      emailRef.current.placeholder = "Please enter a valid email";
      setShowSpinner(false);
      return;
    }

    if (detailsRef.current.value.trim() === "") {
      detailsRef.current.classList.add("error");
      detailsRef.current.value = "";
      detailsRef.current.placeholder =
        "Please provide some details about your project";
      setShowSpinner(false);
      return;
    }

    try {
      const res2 = await fetch(
        "https://formsubmit.co/ajax/arka.online1995@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            details: detailsRef.current.value,
            extras: extrasRef.current.value,
          }),
        }
      );

      const data = await res2.json();

      if (data.success === "true") {
        msg = "thank you for connecting";
        cls = "sms--confirm";
      } else throw new Error("some thing went wrong");
    } catch (err) {
      msg = "something went wrong. please try again";
      cls = "sms--error";
    } finally {
      document.querySelector("body").style.overflowY = "auto";
      setMessage(msg);
      setClsName(cls);
      setShowMessage(true);
      props.setShowBackdrop(false);
      setTimeout(() => {
        props.setShowForm(false);
      }, 2000);
    }
  };

  const focusHandler = (e) => {
    e.target.classList.remove("error");
  };

  useEffect(() => {
    setY(window.scrollY);
    if (props.showBackdrop) {
      document.querySelector("body").style.overflow = "hidden";
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          document.querySelector("body").style.overflowY = "auto";
          props.setShowForm(false);
        }
      });
    }
  }, [props]);

  return (
    <div
      className="form-box"
      style={{
        top: `${y}px`,
      }}
    >
      {showMessage && (
        <div
          className={`${
            props.mode
              ? `message-box ${clsName}`
              : `message-box ${clsName} message-box--dark`
          }`}
        >
          <p className={`${props.mode ? "message" : "message message--dark"}`}>
            {message}
          </p>
        </div>
      )}
      {!showMessage && (
        <article className="contact-me">
          <div className="contact-me__links">
            <a
              rel="noopener noreferrer"
              href="tel:+917384731979"
              target="_blank"
              className="contact-me__link"
            >
              <div className="contact-me__link__logo">
                <img src={phone} alt="phone" />
              </div>
              <div
                className={`${
                  props.mode
                    ? "contact-me__link__info"
                    : "contact-me__link__info contact-me__link__info--dark"
                }`}
              >
                <p className="contact-me__link__info__text"> Call me</p>
                <p className="contact-me__link__info__at">7384731979</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:arka.online1995@gmail.com"
              target="_blank"
              className="contact-me__link"
            >
              <div className="contact-me__link__logo">
                <img src={mail} alt="mail envelop" />
              </div>
              <div
                className={`${
                  props.mode
                    ? "contact-me__link__info"
                    : "contact-me__link__info contact-me__link__info--dark"
                }`}
              >
                <p className="contact-me__link__info__text">Mail me</p>
                <p className="contact-me__link__info__at">
                  arka.online1995@gmail.com
                </p>
              </div>
            </a>
          </div>
          <form
            className={`${
              props.mode
                ? "contact-me__form"
                : "contact-me__form contact-me__form--dark"
            }`}
            onSubmit={submitHandler}
          >
            <input type="hidden" name="_subject" value="New submission!" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              ref={nameRef}
              onFocus={focusHandler}
            />
            <input
              type="text"
              name="email"
              placeholder="Email id"
              ref={emailRef}
              onFocus={focusHandler}
            />
            <textarea
              name="details"
              placeholder="Please provide a brief project details "
              rows="5"
              cols="33"
              ref={detailsRef}
              onFocus={focusHandler}
            />
            <textarea
              name="extra"
              placeholder="Extra information (if any)"
              rows="5"
              cols="33"
              ref={extrasRef}
            />
            <button type="submit">
              {!showSpinner && <p>SEND</p>}
              {showSpinner && (
                <img src={loading} alt="some dots are rotating" />
              )}
            </button>
          </form>
        </article>
      )}
    </div>
  );
};

export default ContactMe;
