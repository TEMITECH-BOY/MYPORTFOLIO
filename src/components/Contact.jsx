import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";



export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4 text-center ">
      <h3 className="text-3xl font-semibold mb-4">Contact</h3>
      <p className="mb-6">
        Let's connect! Feel free to reach out on social media.
      </p>
     
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/TEMITECH-BOY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/temitayo-osunla-b483891b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://twitter.com/temitayoosunla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={24} />
        </a>
      </div>
       <div className=" flex items-center justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
