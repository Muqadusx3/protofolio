'use client';
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

type ContactInfo = {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
};

export default function Contact() {
  const [contact, setContact] = useState<ContactInfo | null>(null);

  useEffect(() => {
    fetch("/api/contact")
      .then(res => res.json())
      .then(data => setContact(data));
  }, []);

  if (!contact) return <div className="text-center py-20">Loading contact info...</div>;

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-bl from-blue-200 to-green-50 text-gray-800 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-right space-y-6">
             <h2 className="text-4xl font-bold text-center text-gray-700 mb-4">Let’s Connect</h2>
        <p className="text-lg text-center text-gray-700 mb-12">
          Thank you for visiting my portfolio. Feel free to connect with me on social platforms!
        </p>
            <div className="flex justify-center md:justify-center gap-6 text-3xl">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-600 hover:text-purple-600" />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 hover:text-purple-600" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left space-y-6">
            <h3 className="text-2xl font-semibold text-center text-gray-600">Contact Info</h3>
            <div className="space-y-3 text-md text-gray-800 md:ml-42">
              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaPhoneAlt className="text-green-600" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaEnvelope className="text-green-600" />
                <span>{contact.email}</span>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-3">
                <FaMapMarkerAlt className="text-green-600" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 pt-6 mt-16 text-center text-sm text-blue-400">
          Designed by Muqadus Masood
        </div>
      </div>
    </section>
  );
}
