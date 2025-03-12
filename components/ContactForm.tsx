"use client";
import React, { useState } from 'react';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [isLoading, setIsLoading] = useState(false);
   const [submitStatus, setSubmitStatus] = useState({
      success: false,
      error: ''
   });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
      if (errors[name as keyof typeof errors]) {
         setErrors(prev => ({
            ...prev,
            [name]: ''
         }));
      }
   };

   const validateForm = () => {
      let isValid = true;
      const newErrors = { name: '', email: '', message: '' };

      if (!formData.name.trim()) {
         newErrors.name = 'Name is required';
         isValid = false;
      }

      if (!formData.email.trim()) {
         newErrors.email = 'Email is required';
         isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = 'Please enter a valid email address';
         isValid = false;
      }

      if (!formData.message.trim()) {
         newErrors.message = 'Message is required';
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitStatus({ success: false, error: '' });
      if (!validateForm()) return;
      setIsLoading(true);
      try {
         const response = await fetch('/api/get-in-touch', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Something went wrong');
         }

         // Success
         setSubmitStatus({ success: true, error: '' });

         // Reset form on success
         setFormData({ name: '', email: '', message: '' });

      } catch (error) {
         console.error('Form submission error:', error);
         const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
         setSubmitStatus({ success: false, error: errorMessage });
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="space-y-6">
         {submitStatus.success && (
            <div className="p-3 bg-green-100 text-green-800 rounded">
               Your message has been sent successfully! Check your email for confirmation.
            </div>
         )}

         {submitStatus.error && (
            <div className="p-3 bg-red-100 text-red-800 rounded">
               {submitStatus.error}
            </div>
         )}

         <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
               <label htmlFor="name" className="block text-secondary text-sm">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.name ? 'border-red-500' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight`}
                  placeholder="Your name"
                  disabled={isLoading}
               />
               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="space-y-2">
               <label htmlFor="email" className="block text-secondary text-sm">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.email ? 'border-red-500' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight`}
                  placeholder="your.email@example.com"
                  disabled={isLoading}
               />
               {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
               <label htmlFor="message" className="block text-secondary text-sm">Message</label>
               <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.message ? 'border-red-500' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight resize-none`}
                  placeholder="Write your message here..."
                  disabled={isLoading}
               />
               {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
               type="submit"
               className="bg-accent-green hover:bg-accent-green-light text-background-primary font-medium py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full"
               disabled={isLoading}
            >
               {isLoading ? (
                  <>
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     Sending...
                  </>
               ) : (
                  'Send Message'
               )}
            </button>
         </form>
      </div>
   );
};

export default ContactForm;