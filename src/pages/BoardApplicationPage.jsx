import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  REGISTRATION_OPEN,
  WEB3FORMS_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_UPLOAD_PRESET,
} from "../config/appConfig";
import {
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaCloudUploadAlt,
  FaFile,
  FaTrash,
  FaLinkedin,
} from "react-icons/fa";

const POSITIONS = [
  "Secretary",
  "Junior Treasurer",
  "Vice President",
  "Vice Secretary",
  "Assistant Junior Treasurer",
  "Head of Designing (Editor)",
  "Head of Content Writing (Editor)",
  "Committee Member 1 (Male)",
  "Committee Member 2 (Female)",
  "Web Master",
  "Tech Lead (Computer Science)",
  "Tech Lead (Electronics)",
  "Head of Strategic Partnerships",
  "Public Relations Coordinator",
  "Membership Coordinator",
];



export default function BoardApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
    linkedIn: "",
    positions: [],
    motivation: "",
    contribution: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Validate a single field and return its error message (or empty string)
  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 3) return "Name must be at least 3 characters";
        return "";
      case "studentId":
        if (!value.trim()) return "Student ID is required";
        if (!/^[A-Za-z]{2}\/\d{4}\/\d{3}$/.test(value.trim()))
          return "Invalid format. Use format like EC/2023/001";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9+\-\s()]+$/.test(value)) return "Please enter digits only";
        const digits = value.replace(/\D/g, "");
        if (digits.length !== 10) return "Phone number must be exactly 10 digits";
        return "";
      case "linkedIn":
        if (!value.trim()) return "LinkedIn profile link is required";
        if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(value)) return "Please enter a valid LinkedIn URL";
        return "";
      case "positions":
        if (!value || value.length === 0) return "Please select at least one position";
        return "";
      case "motivation":
        if (!value.trim()) return "Please tell us why you want to join";
        if (value.trim().length < 20) return "Please write at least 20 characters";
        return "";
      case "contribution":
        if (!value.trim()) return "Please describe your past contributions to ECSC";
        if (value.trim().length < 20) return "Please write at least 20 characters";
        return "";
      default:
        return "";
    }
  };

  // Track which fields have been blurred (left) at least once
  const [blurred, setBlurred] = useState({});
  // Track if the user has attempted to submit at least once
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only show real-time errors after the user has tried to submit once
    if (submitAttempted) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setBlurred((prev) => ({ ...prev, [name]: true }));
    // Validate on blur only if the field has content (don't nag on empty first visit)
    if (value.trim() || submitAttempted) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.studentId.trim())
      newErrors.studentId = "Student ID is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (digits only)";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }
    if (!formData.linkedIn.trim()) {
      newErrors.linkedIn = "LinkedIn profile link is required";
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedIn)) {
      newErrors.linkedIn = "Please enter a valid LinkedIn URL";
    }
    if (!formData.positions || formData.positions.length === 0)
      newErrors.positions = "Please select at least one position";
    if (!formData.motivation.trim())
      newErrors.motivation = "Please tell us why you want to join";
    if (!formData.contribution.trim())
      newErrors.contribution = "Please describe your past contributions to ECSC";
    if (!file)
      newErrors.file = "Please upload your CV / Resume (PDF)";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setSubmitError("");
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTimeout(() => {
        const firstErrorField = document.querySelector(".border-red-400");
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
      return;
    }
    setIsSubmitting(true);

    try {
      let fileUrl = "";

      // Step 1: Upload file to Cloudinary (if a file is selected)
      if (file) {
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", file);
        cloudinaryData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        cloudinaryData.append("folder", "ecsc_applications");

        const cloudinaryRes = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
          { method: "POST", body: cloudinaryData }
        );

        const cloudinaryResult = await cloudinaryRes.json();

        if (cloudinaryResult.secure_url) {
          fileUrl = cloudinaryResult.secure_url;
        } else {
          setSubmitError("File upload failed. Please try again.");
          setIsSubmitting(false);
          return;
        }
      }

      // Step 2: Send form data + file URL to Web3Forms
      const data = new FormData();
      data.append("access_key", WEB3FORMS_API_KEY);
      data.append("subject", `Board Application: ${formData.positions.join(", ")} - ${formData.fullName}`);
      data.append("from_name", "ECSC Board Applications");
      data.append("Full Name", formData.fullName);
      data.append("Student ID", formData.studentId);
      data.append("Email", formData.email);
      data.append("Phone", formData.phone);
      data.append("LinkedIn Profile", formData.linkedIn);
      data.append("Positions Applied For", formData.positions.join(", "));
      data.append("Motivation", formData.motivation);
      data.append("Past Contributions to ECSC", formData.contribution);
      if (formData.experience.trim()) {
        data.append("Experience", formData.experience);
      }
      if (fileUrl) {
        data.append("CV / Resume Link", fileUrl);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── File handling ────────────────────────────────────────
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: "File must be under 5MB" }));
        return;
      }
      const allowedTypes = ["application/pdf"];
      if (!allowedTypes.includes(selectedFile.type)) {
        setErrors((prev) => ({ ...prev, file: "Only PDF files are allowed" }));
        return;
      }
      setFile(selectedFile);
      setErrors((prev) => ({ ...prev, file: "" }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      const fakeEvent = { target: { files: [droppedFile] } };
      handleFileChange(fakeEvent);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // ── Registration Closed View ──────────────────────────────
  if (!REGISTRATION_OPEN) {
    return (
      <div className="bg-white min-h-screen pt-24">
        <Helmet>
          <title>Board Applications - ECSC | University of Kelaniya</title>
          <meta
            name="description"
            content="Board member applications for the Electronics and Computer Science Club at the University of Kelaniya."
          />
          <link rel="canonical" href="/apply" />
        </Helmet>

        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 shadow-lg border border-gray-200">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaTimesCircle className="text-red-500 text-4xl" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Registration Closed
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Board member applications are currently closed. Follow our
                social media channels to stay updated on when the next
                registration period opens.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── Success View ──────────────────────────────────────────
  if (submitted) {
    return (
      <div className="bg-white min-h-screen pt-24">
        <Helmet>
          <title>Application Submitted - ECSC | University of Kelaniya</title>
        </Helmet>

        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-lg border border-gray-200">
              {/* Animated checkmark */}
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <FaCheckCircle className="text-green-500 text-5xl" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Submitted!
              </h1>
              <p className="text-gray-600 text-lg mb-3">
                Thank you, <strong>{formData.fullName}</strong>! Your
                application for <strong>{formData.position}</strong> has been
                received successfully.
              </p>
              <p className="text-gray-500 mb-8">
                We'll review your application and get back to you via email at{" "}
                <strong>{formData.email}</strong>.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ── Application Form View ─────────────────────────────────
  return (
    <div className="min-h-screen pt-20 bg-blue-900">
      <Helmet>
        <title>Apply for Board - ECSC | University of Kelaniya</title>
        <meta
          name="description"
          content="Apply to be a board member of the Electronics and Computer Science Club at the University of Kelaniya."
        />
        <link rel="canonical" href="/apply" />
      </Helmet>

      {/* ── Inline Styles ─────────────────────────────────── */}
      <style>{`
        .wavy-underline-apply {
          position: relative;
          display: inline-block;
        }
        @keyframes waveMoveApply {
          0% { background-position: 0 0; }
          100% { background-position: 50px 0; }
        }
        .wavy-underline-apply::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 15'%3E%3Cpath d='M0 8 Q 12.5 2, 25 8 T 50 8 T 75 8 T 100 8' stroke='%23dc2626' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-size: 50px 12px;
          background-repeat: repeat-x;
          animation: waveMoveApply 3s linear infinite;
        }

        .form-input {
          transition: all 0.3s ease;
        }
        .form-input:focus {
          box-shadow: 0 4px 20px rgba(0, 101, 173, 0.15);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .btn-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        .pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }
      `}</style>

      {/* ── Hero Banner ───────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 py-16 lg:py-20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-blue-200 font-medium text-sm tracking-wider uppercase">
                📋 Now Accepting Applications
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our{" "}
              <span className="wavy-underline-apply">Board</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Become a leader in the Electronics and Computer Science Club.
              Shape the future of technology at the University of Kelaniya.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form Section ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Call for Applications Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 text-center shadow-sm animate-fade-in-up">
            <h3 className="text-xl font-bold text-blue-900 mb-2">READ THIS before applying</h3>
            <p className="text-blue-700 mb-4">Please review the official Call for Applications document carefully to understand the roles, requirements, and responsibilities.</p>
            <a 
              href="https://res.cloudinary.com/dtpwzhjp9/raw/upload/v1772376241/ecsc_applications/call_for_applications.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow hover:shadow-md transform hover:-translate-y-0.5"
            >
              <FaFile className="text-white" />
              View Call for Applications (PDF)
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8"
          >
            {/* ── Personal Details ──────────────────────── */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaUser className="text-blue-600" />
                </span>
                Personal Information
              </h2>
              <p className="text-gray-400 text-sm mb-6 ml-[52px]">
                Tell us about yourself
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Kasun Perera"
                      className={`form-input w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.fullName
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                      } outline-none text-gray-900 placeholder-gray-400`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Student ID */}
                <div>
                  <label
                    htmlFor="studentId"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Student ID / Reg. No.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaIdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. EC/2023/001"
                      className={`form-input w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.studentId
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                      } outline-none text-gray-900 placeholder-gray-400`}
                    />
                  </div>
                  {errors.studentId && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.studentId}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. kasun@email.com"
                      className={`form-input w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.email
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                      } outline-none text-gray-900 placeholder-gray-400`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. 077 123 4567"
                      className={`form-input w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.phone
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                      } outline-none text-gray-900 placeholder-gray-400`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* LinkedIn */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="linkedIn"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    LinkedIn Profile Link <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="url"
                      id="linkedIn"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className={`form-input w-full pl-11 pr-4 py-3.5 rounded-xl border-2 ${
                        errors.linkedIn
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                      } outline-none text-gray-900 placeholder-gray-400`}
                    />
                  </div>
                  {errors.linkedIn && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.linkedIn}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* ── Divider ──────────────────────────────── */}
            <hr className="border-gray-100" />

            {/* ── Position & Motivation ─────────────────── */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaBriefcase className="text-blue-600" />
                </span>
                Application Details
              </h2>
              <p className="text-gray-400 text-sm mb-6 ml-[52px]">
                Tell us about your interests and experience
              </p>

              <div className="space-y-6">
                {/* Positions (Checkboxes) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Positions Applying For{" "}
                    <span className="text-red-500">*</span>
                    <span className="text-gray-400 font-normal text-xs ml-2">(select one or more)</span>
                  </label>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 p-4 rounded-xl border-2 ${
                    errors.positions
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200"
                  }`}>
                    {POSITIONS.map((p) => (
                      <label
                        key={p}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.positions.includes(p)
                            ? "bg-blue-50 border border-blue-300"
                            : "bg-gray-50 border border-transparent hover:bg-blue-50/50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.positions.includes(p)}
                          onChange={(e) => {
                            const updated = e.target.checked
                              ? [...formData.positions, p]
                              : formData.positions.filter((pos) => pos !== p);
                            setFormData((prev) => ({ ...prev, positions: updated }));
                            if (submitAttempted) {
                              setErrors((prev) => ({
                                ...prev,
                                positions: updated.length === 0 ? "Please select at least one position" : "",
                              }));
                            }
                          }}
                          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 accent-blue-600"
                        />
                        <span className={`text-sm ${
                          formData.positions.includes(p)
                            ? "text-blue-700 font-medium"
                            : "text-gray-700"
                        }`}>{p}</span>
                      </label>
                    ))}
                  </div>
                  {errors.positions && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.positions}
                    </p>
                  )}
                </div>

                {/* Motivation */}
                <div>
                  <label
                    htmlFor="motivation"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Why do you want to join the board?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Share your vision and what you'd like to achieve as a board member..."
                    className={`form-input w-full px-4 py-3.5 rounded-xl border-2 resize-none ${
                      errors.motivation
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                    } outline-none text-gray-900 placeholder-gray-400`}
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.motivation}
                    </p>
                  )}
                </div>

                {/* Contribution to ECSC */}
                <div>
                  <label
                    htmlFor="contribution"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Past Contributions to ECSC{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contribution"
                    name="contribution"
                    rows={4}
                    value={formData.contribution}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe your past contributions, activities, or involvement with the Electronics and Computer Science Club..."
                    className={`form-input w-full px-4 py-3.5 rounded-xl border-2 resize-none ${
                      errors.contribution
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
                    } outline-none text-gray-900 placeholder-gray-400`}
                  />
                  {errors.contribution && (
                    <p className="text-red-500 text-sm mt-1.5 ml-1">
                      {errors.contribution}
                    </p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Relevant Experience{" "}
                    <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Any leadership roles, club activities, projects, or certifications..."
                    className="form-input w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 outline-none text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* ── Divider ──────────────────────────────── */}
            <hr className="border-gray-100" />

            {/* ── File Upload ──────────────────────────── */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaCloudUploadAlt className="text-blue-600" />
                </span>
                Upload CV / Resume <span className="text-red-500">*</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6 ml-[52px]">
                PDF format only — max 5MB
              </p>

              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                  errors.file
                    ? "border-red-400 bg-red-50"
                    : file
                    ? "border-green-400 bg-green-50"
                    : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf"
                  className="hidden"
                />

                {file ? (
                  <div className="flex items-center justify-center gap-3">
                    <FaFile className="text-green-500 text-2xl" />
                    <div className="text-left">
                      <p className="text-gray-900 font-medium">{file.name}</p>
                      <p className="text-gray-500 text-sm">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="ml-4 w-8 h-8 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors border-0"
                    >
                      <FaTrash className="text-red-500 text-sm" />
                    </button>
                  </div>
                ) : (
                  <>
                    <FaCloudUploadAlt className="text-gray-400 text-4xl mx-auto mb-3" />
                    <p className="text-gray-600 font-medium">
                      Drag & drop your file here, or{" "}
                      <span className="text-blue-600 underline">browse</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      PDF only (max 5MB)
                    </p>
                  </>
                )}
              </div>
              {errors.file && (
                <p className="text-red-500 text-sm mt-1.5 ml-1">
                  {errors.file}
                </p>
              )}
            </div>

            {/* ── Submit Error ───────────────────────────── */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
                <p className="text-red-600 text-sm font-medium">{submitError}</p>
              </div>
            )}

            {/* ── Submit Button ─────────────────────────── */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 btn-shimmer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Submit Application
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-gray-400 text-sm">
              By submitting, you agree that the information provided is accurate.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
