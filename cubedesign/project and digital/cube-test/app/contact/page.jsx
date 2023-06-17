"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4hkkdg",
        "template_zolxbng",
        form.current,
        "8NW35UUJSwfidE7ML"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message completed");
        },
        (error) => {
          console.log(error.text);
          alert("message failed");
        }
      );
  };
  return (
    <div className="w-screen h-screen max-w-full">
      <div className="flex flex-col">
        {/* lets get in touch */}
        <div className="w-full mb-8">
          <p className="inline-block text-3xl font-semibold border-2 border-gray-300 ml-24">
            Let's get in touch!
          </p>
        </div>
        <div className="flex">
          {/* general information */}
          <div className="flex flex-col w-2/6 ml-24">
            <div className="mb-5">
              <p className="text-lg font-medium">Genaral Inquiries</p>
              <p>info@cubedesign.ca</p>
            </div>
            <div className="mb-5">
              <p className="text-lg font-medium">General Call</p>
              <p>123-456-7890</p>
            </div>
            <div>
              <p className="text-lg font-medium">Our Office</p>
              <p>
                2800 14th Avenue Unit 7&8 <br></br> Markham, L3R 0E4
              </p>
            </div>
          </div>
          {/* email */}
          <div className="email">
            <p>Ready to take your business to the next level?</p>
            <form ref={form} onSubmit={sendEmail}>
              <p>please select service you need *</p>
              <div><input type="checkbox" id="cb1" name="service" value={`printing`} className="hidden"/>
    <label for="cb1"><img src="https://picsum.photos/seed/1/100" /></label>
  </div>
             
              
              <br />
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요."
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="메일 주소를 입력해주세요"
              />
              <br />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
