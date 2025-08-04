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
      <div className="space-y-6 relative">
         {/* Licky Code Background Elements */}
         <div className="absolute top-0 right-0 text-accent-green opacity-10 font-mono text-sm pointer-events-none">{'{'}</div>
         <div className="absolute bottom-0 left-0 text-link-color opacity-10 font-mono text-sm pointer-events-none">{'}'}</div>
         <div className="absolute top-8 left-4 text-accent-yellow opacity-10 font-mono text-xs pointer-events-none">{'// form'}</div>

         {submitStatus.success && (
            <div className="p-3 bg-accent-green/20 text-accent-green rounded border border-accent-green/30 font-mono text-sm">
               ✓ Your message has been sent successfully! Check your email for confirmation.
            </div>
         )}

         {submitStatus.error && (
            <div className="p-3 bg-accent-red/20 text-accent-red rounded border border-accent-red/30 font-mono text-sm">
               ✗ {submitStatus.error}
            </div>
         )}

         <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
            <div className="space-y-2">
               <label htmlFor="name" className="block text-secondary text-sm font-mono">{`// Name`}</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.name ? 'border-accent-red' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight font-mono`}
                  placeholder="Your name"
                  disabled={isLoading}
               />
               {errors.name && <p className="text-accent-red text-xs mt-1 font-mono">✗ {errors.name}</p>}
            </div>

            <div className="space-y-2">
               <label htmlFor="email" className="block text-secondary text-sm font-mono">{`// Email`}</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.email ? 'border-accent-red' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight font-mono`}
                  placeholder="your.email@example.com"
                  disabled={isLoading}
               />
               {errors.email && <p className="text-accent-red text-xs mt-1 font-mono">✗ {errors.email}</p>}
            </div>

            <div className="space-y-2">
               <label htmlFor="message" className="block text-secondary text-sm font-mono">{`// Message`}</label>
               <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-box border ${errors.message ? 'border-accent-red' : 'border-accent-green'} rounded px-3 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-highlight resize-none font-mono`}
                  placeholder="Write your message here..."
                  disabled={isLoading}
               />
               {errors.message && <p className="text-accent-red text-xs mt-1 font-mono">✗ {errors.message}</p>}
            </div>

            <button
               type="submit"
               className="bg-accent-green hover:bg-accent-green-light text-background-primary font-medium py-2 px-4 rounded flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full font-mono"
               disabled={isLoading}
            >
               {isLoading ? (
                  <>
                     <div className="w-5 h-5 border-2 border-background-primary border-t-transparent rounded-full mr-3"></div>
                     Sending...
                  </>
               ) : (
                  '[Send Message ↗]'
               )}
            </button>
         </form>
      </div>
   );
};

export default ContactForm;