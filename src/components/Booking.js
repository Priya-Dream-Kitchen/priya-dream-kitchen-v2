'use client';

import { useState } from 'react';
import Image from 'next/image';
import Ornament from './Ornament';

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

  const fieldClass = (name) =>
    `w-full min-h-12 px-4 py-3 rounded-lg border bg-surface text-text placeholder-text-muted/70 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
      touched[name] && errors[name] ? 'border-accent ring-2 ring-accent/25' : 'border-text/25 focus:border-primary'
    }`;

  return (
    <section id="booking" className="relative bg-secondary text-cream py-20 sm:py-32">
      <div className="scallop" aria-hidden="true" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Hearth & Header */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <p className="eyebrow !text-marigold">Reservation</p>
          <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">
            Book your <em className="text-marigold font-normal">experience</em>
          </h2>
          <Ornament className="mt-5 text-marigold" />
          <p className="mt-5 text-lg text-cream/80">
            Choose your date, select a slot, and reserve your hands-on culinary journey.
          </p>
          <div className="relative hidden lg:block mt-10 w-[70%] aspect-[4/5] max-h-[46vh] arch arch-frame bg-bark" style={{ "--frame-gap": "var(--secondary)", "--frame-line": "var(--marigold)" }}>
            <Image
              src="/images/kitchen/wood-fire-hearth.webp"
              alt="The traditional wood-fire hearth with a clay pot and lid"
              fill
              sizes="30vw"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="ornate-card lg:col-span-7 bg-surface text-text p-7 sm:p-12 rounded-3xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="font-semibold block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('name')}
                  placeholder="John Doe"
                  required
                />
                {touched.name && errors.name && (
                  <p className="text-sm text-accent font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="font-semibold block">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('email')}
                  placeholder="johndoe@example.com"
                  required
                />
                {touched.email && errors.email && (
                  <p className="text-sm text-accent font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="font-semibold block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('phone')}
                  placeholder="+44 7911 123456"
                  required
                />
                {touched.phone && errors.phone && (
                  <p className="text-sm text-accent font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label htmlFor="date" className="font-semibold block">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('date')}
                  required
                />
                {touched.date && errors.date && (
                  <p className="text-sm text-accent font-medium">{errors.date}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Time Slot */}
              <div className="space-y-2">
                <label htmlFor="time" className="font-semibold block">
                  Time Slot
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={fieldClass('time')}
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
                  <p className="text-sm text-accent font-medium">{errors.time}</p>
                )}
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <label htmlFor="guests" className="font-semibold block">
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
                  max="10"
                  className={fieldClass('guests')}
                  required
                />
                {touched.guests && errors.guests && (
                  <p className="text-sm text-accent font-medium">{errors.guests}</p>
                )}
              </div>
            </div>

            {/* Pricing details and Note */}
            <div className="pt-4 border-t border-border-color flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-text-muted font-medium">
                  Class Rates: <span className="text-primary font-bold">from $25 per guest</span>
                </span>
              </div>
              <p className="text-sm text-text-muted max-w-sm">
                *Submitting redirects you to WhatsApp with your details prefilled to confirm with Chef Priya.
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="btn btn-primary w-full disabled:opacity-50 disabled:pointer-events-none"
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
