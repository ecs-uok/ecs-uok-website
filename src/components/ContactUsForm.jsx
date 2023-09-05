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
    <form className="mx-auto" onSubmit={handleSubmit}>
      <div className="border-4 border-primary rounded-2xl">
        {/* username input */}
        <div className="flex items-center m-4 ">
          <FaUser size={24} className="absolute ml-4" />
          <input
            type="text"
            placeholder="Full name"
            className="flex text-xl px-16 py-2 max-w-[480px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* email input */}
        <div className="flex  items-center m-4">
          <FaEnvelope size={24} className="absolute ml-4" />
          <input
            type="email"
            placeholder="Email address"
            className="flex text-xl px-16 py-2 max-w-[480px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* phone number input */}
        <div className="flex  items-center m-4">
          <FaPhone size={24} className="absolute ml-4" />
          <input
            type="tel"
            placeholder="Phone number"
            className="flex text-xl px-16 py-2 max-w-[480px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        {/* subject input */}
        <div className="flex  items-center m-4">
          <FaInbox size={24} className="absolute ml-4" />
          <input
            type="text"
            placeholder="Subject"
            className="flex text-xl px-16 py-2 max-w-[480px] h-[60px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* message input */}
        <div className="flex  m-4">
          <FaMessage size={24} className="absolute ml-4 mt-4" />
          <textarea
            type="text"
            placeholder="Message"
            className="flex text-xl px-16 py-2 max-w-[480px] h-[180px] border-4 border-primary rounded-2xl bg-gray-100 focus:border-secondary"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {successMessage && (
          <div className="text-green-600 font-bold text-xl flex gap-4 justify-center">
            <FaCircleCheck />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 font-bold text-xl flex gap-4 justify-center">
            <FaCircleXmark />
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
      </div>
    </form>
  );
}
