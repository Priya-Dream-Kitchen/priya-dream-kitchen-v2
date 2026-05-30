'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '1',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    { value: '8-10', label: '8:00 AM - 10:00 AM' },
    { value: '10-12', label: '10:00 AM - 12:00 PM' },
    { value: '12-2', label: '12:00 PM - 2:00 PM' },
    { value: '2-4', label: '2:00 PM - 4:00 PM' },
    { value: '4-6', label: '4:00 PM - 6:00 PM' },
    { value: '6-8', label: '6:00 PM - 8:00 PM' },
    { value: '8-10-pm', label: '8:00 PM - 10:00 PM' },
  ];

  const validateField = (name, value) => {
    let error = '';
    if (!value) {
      error = 'This field is required';
    } else {
      if (name === 'name' && value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
      if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        error = 'Please enter a valid email address';
      }
      if (name === 'phone' && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value)) {
        error = 'Please enter a valid phone number';
      }
      if (name === 'guests') {
        const num = parseInt(value, 10);
        if (isNaN(num) || num < 1 || num > 6) {
          error = 'Number of guests must be between 1 and 6';
        }
      }
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    const newTouched = {};
    Object.keys(formData).forEach((key) => {
      newTouched[key] = true;
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    setTouched(newTouched);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate cooking submittion animation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const message = `Booking Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime Slot: ${formData.time}\nGuests: ${formData.guests}`;
      const phoneNumber = '+94742417308';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappLink, '_blank');

      // Reset form on success after brief cooldown
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '1',
        });
        setErrors({});
        setTouched({});
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 relative overflow-hidden bg-bg/50">
      {/* Decorative blurred blobs for premium feel */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="text-primary font-sans font-semibold text-xs sm:text-sm uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full inline-block">
            Reservation
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-text">
            Book Your Experience
          </h2>
          <p className="text-text-muted text-base sm:text-lg">
            Choose your date, select a slot, and reserve your hands-on culinary journey.
          </p>
        </div>

        {/* Glass Card Form */}
        <div className="glass-panel p-8 sm:p-12 rounded-[32px] border border-border-color shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.name && errors.name
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  placeholder="John Doe"
                  required
                />
                {touched.name && errors.name && (
                  <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.email && errors.email
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  placeholder="johndoe@example.com"
                  required
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.phone && errors.phone
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  placeholder="+44 7911 123456"
                  required
                />
                {touched.phone && errors.phone && (
                  <p className="text-xs text-red-500 font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.date && errors.date
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  required
                />
                {touched.date && errors.date && (
                  <p className="text-xs text-red-500 font-medium">{errors.date}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Time Slot */}
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Time Slot
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.time && errors.time
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  required
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
                {touched.time && errors.time && (
                  <p className="text-xs text-red-500 font-medium">{errors.time}</p>
                )}
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-semibold tracking-wider text-text uppercase block">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min="1"
                  max="6"
                  className={`w-full px-4 py-3 rounded-xl border bg-surface/50 text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    touched.guests && errors.guests
                      ? 'border-red-500 ring-2 ring-red-500/25'
                      : 'border-border-color focus:border-primary'
                  }`}
                  required
                />
                {touched.guests && errors.guests && (
                  <p className="text-xs text-red-500 font-medium">{errors.guests}</p>
                )}
              </div>
            </div>

            {/* Pricing details and Note */}
            <div className="pt-4 border-t border-border-color/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-text-muted font-medium">
                  Class Rates: <span className="text-accent font-bold">from $20 per guest</span>
                </span>
              </div>
              <p className="text-xs text-text-muted italic max-w-sm">
                *Submitting redirects you to WhatsApp with your details prefilled to confirm with Chef Priya.
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full relative py-4 bg-primary hover:bg-accent text-white font-semibold rounded-full text-base tracking-wider uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Preparing Stove...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Booking Prefilled! Redirecting...</span>
                  </>
                ) : (
                  <span>Book Now</span>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
