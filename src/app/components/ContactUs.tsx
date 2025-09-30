"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

enum ContactSubject {
  Inquiry = "inquiry",
  Quote = "quote",
  Support = "support",
  Order = "order",
}

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const subjectLabelMap: Record<ContactSubject | "", string> = useMemo(
    () => ({
      "": "N/A",
      [ContactSubject.Inquiry]: "General Inquiry",
      [ContactSubject.Quote]: "Request Quote",
      [ContactSubject.Support]: "Technical Support",
      [ContactSubject.Order]: "Order Status",
    }),
    []
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const companyName = String(data.get("companyName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "") as ContactSubject | "";
    const message = String(data.get("message") || "").trim();

    const fullName = [name, companyName].filter(Boolean).join(" ");
    const subjectLabel = subjectLabelMap[subject] || "N/A";

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      const templateParams = {
        from_name: fullName,
        from_email: email,
        phone: phone || "N/A",
        subject: subjectLabel,
        message: message,
        company: companyName,
        name: name,
        category: subject,
        to_email: "masterseal.sales@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className='py-20 bg-gradient-to-br from-gray-900 to-black text-white'>
      <div className='container mx-auto px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-3xl font-bold mb-6'>Contact Us</h2>
            <p className='text-lg lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto'>
              Get in touch with our team for any inquiries about our security
              seals and solutions.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* Contact Information */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-bold mb-6 text-white'>
                  Get In Touch
                </h3>
                <p className='text-gray-300 text-lg leading-relaxed mb-8'>
                  Ready to secure your assets? Contact our expert team for
                  personalized solutions and support.
                </p>
              </div>

              {/* Contact Details */}
              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      Phone
                    </h4>
                    <p className='text-gray-300'>
                      Office numbers:
                      <br />
                      T: 02-8255 9085
                      <br />
                      T: 02-8425 0644
                      <br />
                      M: 0960 231 6000
                      <br />
                      T: 02-8661 6753 (temporarily unavailable - pldt repair)
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      Email
                    </h4>
                    <p className='text-gray-300'>masterseal.sales@gmail.com</p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      Address
                    </h4>
                    <p className='text-gray-300'>
                      60 Dona Aurora St, Parang, Marikina, Manila, 1809
                      Philippines
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-1'>
                      Business Hours
                    </h4>
                    <p className='text-gray-300'>
                      Mon - Fri: 8:30 am - 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20'>
              <h3 className='text-2xl font-bold mb-6 text-white'>
                Send us a Message
              </h3>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='Enter your name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='companyName'
                      className='block text-sm font-medium text-gray-300 mb-2'
                    >
                      Company Name
                    </label>
                    <input
                      type='text'
                      id='companyName'
                      name='companyName'
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                      placeholder='Enter your company name'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    placeholder='Enter your email address'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                    placeholder='Enter your phone number'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent'
                  >
                    <option value='' className='text-gray-900'>
                      Select a subject
                    </option>
                    <option
                      value={ContactSubject.Inquiry}
                      className='text-gray-900'
                    >
                      General Inquiry
                    </option>
                    <option
                      value={ContactSubject.Quote}
                      className='text-gray-900'
                    >
                      Request Quote
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none'
                    placeholder='Tell us about your inquiry...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className='mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 mr-2'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className='mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg'>
                    <div className='flex items-center'>
                      <svg
                        className='w-5 h-5 mr-2'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Failed to send message. Please try again or contact us
                      directly.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
