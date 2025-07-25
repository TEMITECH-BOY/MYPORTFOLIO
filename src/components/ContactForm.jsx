import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success | error | loading

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "temitayoosunla@gmail.com",
        "template_5wj3x5e",
        formData,
        "k8tPHMcA-awlgbnYX"
      )
      .then(() => {
        setStatus("success");
        setFormData({ from_name: "", from_email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className="p-8 bg-white border-green-500">
      <h3 className="text-xl font-semibold text-center mb-6 text-teal-600 ">
        Contact Me
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 w-100"> 
        <div>
          <label className="block text-gray-700 text-left mb-1">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-1">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-left mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 text-sm text-center mt-2">
            ✅ Your message has been sent!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-sm text-center mt-2">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
