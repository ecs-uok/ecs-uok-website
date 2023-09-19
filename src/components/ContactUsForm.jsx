import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaCircleXmark,
  FaUser,
  FaMessage,
  FaPhone,
  FaInbox,
  FaCircleCheck,
} from "react-icons/fa6";

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
    <form onSubmit={handleSubmit}>
      <div className="border-4 border-primary rounded-2xl mx-auto w-80 md:w-[540px]">
        {/* username input */}
        <div className="relative m-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaUser size={24} className="fill-primary" />
          </span>
          <input
            type="text"
            placeholder="Full name"
            className="w-full h-12 md:h-16 text-xl pl-12 pr-3 py-4 border-4 border-primary rounded-2xl focus:border-blue-500 focus:ring focus:ring-blue-200"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* email input */}
        <div className="relative m-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaEnvelope size={24} className="fill-primary" />
          </span>
          <input
            type="email"
            placeholder="Email address"
            className="w-full  h-12 md:h-16 text-xl pl-12 pr-3 py-4 border-4 border-primary rounded-2xl focus:border-blue-500 focus:ring focus:ring-blue-200"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* phone number input */}
        <div className="relative m-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaPhone size={24} className="fill-primary" />
          </span>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full h-12 md:h-16 text-xl pl-12 pr-3 py-4 border-4 border-primary rounded-2xl focus:border-blue-500 focus:ring focus:ring-blue-200"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* subject input */}
        <div className="relative m-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaInbox size={24} className="fill-primary" />
          </span>
          <input
            type="text"
            placeholder="Subject"
            className="w-full h-12 md:h-16 text-xl pl-12 pr-3 py-4 border-4 border-primary rounded-2xl focus:border-blue-500 focus:ring focus:ring-blue-200"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* message input */}
        <div className="relative m-4">
          <span className="absolute inset-y-0 left-0 top-6 flex pl-3">
            <FaMessage size={24} className="fill-primary" />
          </span>
          <textarea
            type="text"
            placeholder="Message"
            className="w-full h-40 md:h-52 text-xl pl-12 pr-3 py-4 border-4 border-primary rounded-2xl focus:border-blue-500 focus:ring focus:ring-blue-200"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {successMessage && (
          <div className="text-green-600 font-bold text-xl flex gap-4 justify-center">
            <FaCircleCheck size={24} color="green" />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 font-bold text-xl flex gap-4 justify-center">
            <FaCircleXmark size={24} color="red" />
            {errorMessage}
          </div>
        )}
        <div className="flex justify-center m-4">
          <button
            type="submit"
            className="bg-primary w-full h-12 md:h-16 rounded-full text-lg md:text-xl text-white font-bold hover:bg-secondary hover:text-white duration-700"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
