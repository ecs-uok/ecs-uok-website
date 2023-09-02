import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="h-6 w-10 fill-gray mx-4 absolute"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="h-6 w-10 fill-gray mx-4 absolute"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="h-6 w-10 fill-gray mx-4 absolute"
          >
            <path d="M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64v0C0 295.2 175.2 485.6 400.1 509.5c9.8 1 19.6 1.8 29.6 2.2c0 0 0 0 0 0c0 0 .1 0 .1 0c6.1 .2 12.1 .4 18.2 .4l0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM441.5 464C225.8 460.5 51.5 286.2 48.1 70.5l99.2-21.3 43 100.4L154.4 179c-18.2 14.9-22.9 40.8-11.1 61.2c30.9 53.3 75.3 97.7 128.6 128.6c20.4 11.8 46.3 7.1 61.2-11.1l29.4-35.9 100.4 43L441.5 464zM48 64v0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0s0 0 0 0" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="h-6 w-10 fill-gray mx-4 absolute"
          >
            <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="h-6 w-10 fill-gray m-4 absolute"
          >
            <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
          </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="w-7 h-7 fill-current"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
            </svg>
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 font-bold text-xl flex gap-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="w-7 h-7 fill-current"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
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
