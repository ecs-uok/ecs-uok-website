import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  EmailIcon,
  FailedIcon,
  FullNameIcon,
  MessageIcon,
  PhoneIcon,
  SubjectIcon,
  SuccessIcon,
} from "../assets/Icon";

export default function ContactUsForm() {
  const initialFormData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_hm42gdn";
    const templateId = "template_fwozc55";
    const userId = "7Zdcqzz9ZKI8P9l37";

    const templateParams = {
      from_name: formData.fullName,
      email_id: formData.email,
      tp_no: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setSuccessMessage("Successfully sent the message!");
        setErrorMessage("");
        setFormData(initialFormData);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage("Error sending the message. Please try again later.");
        setSuccessMessage("");
      });
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(false);
        setErrorMessage(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="border-4 border-primary rounded-2xl">
      <form className="mx-auto" onSubmit={handleSubmit}>
        {/* username input */}
        <div className="flex relative items-center m-4 ">
          <FullNameIcon />
          <input
            type="text"
            placeholder="Full name"
            className="text-xl px-16 py-2 w-[500px] md:w-[400px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* email input */}
        <div className="flex relative items-center m-4">
          <EmailIcon />
          <input
            type="email"
            placeholder="Email address"
            className="text-xl px-16 py-2 w-[500px] md:w-[400px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* phone number input */}
        <div className="flex relative items-center m-4">
          <PhoneIcon />
          <input
            type="tel"
            placeholder="Phone number"
            className="text-xl px-16 py-2 w-[500px] md:w-[400px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* subject input */}
        <div className="flex relative items-center m-4">
          <SubjectIcon />
          <input
            type="text"
            placeholder="Subject"
            className="text-xl px-16 py-2 w-[500px] md:w-[400px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* message input */}
        <div className="flex relative m-4">
          <MessageIcon />
          <textarea
            type="text"
            placeholder="Message"
            className="text-xl px-16 py-2 w-[500px] md:w-[400px] h-[180px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {successMessage && (
          <div className="text-green-600 font-bold text-xl flex gap-4 justify-center">
            <SuccessIcon />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 font-bold text-xl flex gap-4 justify-center">
            <FailedIcon />
            {errorMessage}
          </div>
        )}
        <div className="flex justify-center m-4">
          <button
            type="submit"
            className="bg-primary w-full h-[60px] rounded-full text-xl text-white font-bold hover:bg-secondary duration-700"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
