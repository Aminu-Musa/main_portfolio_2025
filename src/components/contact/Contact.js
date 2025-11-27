import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const formRef = useRef();

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error States
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);

  const [seuccessMsg, setSuccessMsg] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handlers
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  // SEND EMAIL
  const handleSend = (e) => {
    e.preventDefault();

    if (!clientName) setErrClientName(true);
    if (!email) setErrEmail(true);
    if (!messages) setErrMessage(true);
    if (email && !EmailValidation(email)) {
      setErrEmail(true);
      return;
    }

    if (clientName && email && EmailValidation(email) && messages) {
      setLoading(true); // ENABLE SPINNER

      emailjs
        .send(
          "service_t4ijz5x",
          "template_3hbfskb",
          {
            name: clientName,
            email: email,
            message: messages,
          },
          "EKtc1x2sQeqlbRJjh"
        )
        .then(
          () => {
            setLoading(false);

            setSuccessMsg(
              `Hello dear ${clientName}, your message has been sent successfully. Thank you!`
            );

            setClientName("");
            setEmail("");
            setMessages("");

            // Fade out after 2s
            setTimeout(() => {
              setFadeOut(true);
            }, 2000);

            // Remove message after fade-out finishes
            setTimeout(() => {
              setSuccessMsg("");
              setFadeOut(false);
            }, 7000);
          },
          (error) => {
            setLoading(false);
            console.error("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />

      {/* CONTACT INFO SECTION */}
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-sm text-[#ccc] py-4 border-b border-b-zinc-800">
            <span className="bg-designColor text-gray-700 font-medium px-3 py-1 rounded-md">
              Address:
            </span>
            Suleja, Niger State
          </p>
          <p className="flex gap-6 justify-between w-full text-sm text-[#ccc] py-4 border-b border-b-zinc-800">
            <span className="bg-designColor text-gray-700 font-medium px-3 py-1 rounded-md">
              Phone:
            </span>
            +234 9060163364
          </p>
        </div>

        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between w-full text-sm text-[#ccc] py-4 border-b border-b-zinc-800">
            <span className="bg-designColor text-gray-700 font-medium px-3 py-1 rounded-md">
              Email:
            </span>
            aminumusa669@gmail.com
          </p>
          <p className="flex gap-6 justify-between w-full text-sm text-[#ccc] py-4 border-b border-b-zinc-800">
            <span className="bg-designColor text-gray-700 font-medium px-3 py-1 rounded-md">
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />

        {seuccessMsg ? (
          <p
            className={`text-center text-base font-titleFont p-20 text-designColor transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            {seuccessMsg}
          </p>
        ) : (
          <form ref={formRef} className="p-6 flex flex-col gap-6">
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10">
              <input
                onChange={handleName}
                value={clientName}
                name="user_name"
                className={`${
                  errClientName
                    ? "border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none`}
                type="text"
                placeholder="Full Name"
              />

              <input
                onChange={handleEmail}
                value={email}
                name="user_email"
                className={`${
                  errEmail
                    ? "border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none`}
                type="email"
                placeholder="Email Address"
              />
            </div>

            <textarea
              onChange={handleMessages}
              value={messages}
              name="message"
              className={`${
                errMessages
                  ? "border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none resize-none`}
              placeholder="Your Message"
              rows="4"
            ></textarea>

            <button
              onClick={handleSend}
              disabled={loading}
              className="text-base w-44 flex items-center gap-2 text-gray-200 hover:text-designColor duration-200"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-gray-300 border-t-designColor rounded-full animate-spin"></span>
              ) : (
                <>
                  Send Message{" "}
                  <span className="mt-1 text-designColor">
                    <FiSend />
                  </span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;