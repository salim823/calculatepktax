"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contactnowmuhammadharis@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-gray-900 font-sans py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Header Section */}
      <div className="text-center space-y-4 pt-4 sm:pt-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or need help with salary tax calculations? We are here to assist you. Reach out to our support team anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Contact Information & Direct Email */}
        <div className="space-y-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Get in Touch Directly</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you prefer reaching out directly via email, you can click the address below to open a Gmail compose window or use the copy button for your convenience.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl border border-gray-200 gap-3 shadow-sm">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Support Email</span>
                  <div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=contactnowmuhammadharis@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1D4ED8] hover:underline font-semibold text-base break-all"
                    >
                      contactnowmuhammadharis@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors flex-shrink-0"
                >
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 font-medium pl-1">
                  Email address copied to clipboard successfully!
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3">
              <h3 className="text-sm font-bold text-gray-900">Response Time</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We strive to respond to all inquiries within 24 to 48 hours during regular business days.
              </p>
            </div>
          </div>

          <div className="bg-[#0F172A] text-white rounded-2xl p-8 space-y-4 shadow-sm">
            <h3 className="text-lg font-bold">Quick Tax Calculation Resources</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Before reaching out, you might find instant answers on our interactive calculator or detailed tax slabs pages.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/calculator"
                className="bg-[#1D4ED8] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                Salary Calculator
              </Link>
              <Link
                href="/tax-slabs"
                className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors border border-gray-700"
              >
                View Tax Slabs
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <span className="font-semibold text-gray-900">{formData.name}</span>. We have received your message and will get back to you shortly at <span className="font-semibold text-gray-900">{formData.email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="text-xs font-semibold text-[#1D4ED8] hover:underline"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900">Send Us a Message</h2>
                <p className="text-xs text-gray-500">
                  Fill out the form below and our team will review your inquiry.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Muhammad Salim"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Tax Calculation Inquiry"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message or question here..."
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent bg-gray-50/50 resize-y"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-lg shadow-sm transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}