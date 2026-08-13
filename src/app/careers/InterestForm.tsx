"use client";

import { useState } from "react";

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[var(--color-line)] p-10 flex flex-col items-center text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-xl text-[var(--color-ink)]">Expression received</h3>
        <p className="text-sm text-[var(--color-muted)]">
          Thank you for your interest in Rainbow Group. We'll reach out when a suitable opportunity arises.
        </p>
      </div>
    );
  }

  return (
    <form
      className="bg-white rounded-2xl border border-[var(--color-line)] p-8 space-y-5"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">Full Name *</label>
          <input required type="text" placeholder="Your name" className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-line)] text-sm focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">Phone Number *</label>
          <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-line)] text-sm focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">Email Address *</label>
        <input required type="email" placeholder="you@example.com" className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-line)] text-sm focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
      </div>
      <div>
        <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">Area of Interest</label>
        <select className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-line)] text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-navy)] transition-colors bg-white">
          <option value="">Select department</option>
          <option>Teaching – Primary</option>
          <option>Teaching – Secondary</option>
          <option>Early Childhood Education</option>
          <option>Administration</option>
          <option>Support Staff</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-[var(--color-ink)] mb-1.5">Brief Introduction</label>
        <textarea rows={4} placeholder="Tell us a little about yourself and your experience..." className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-line)] text-sm resize-none focus:outline-none focus:border-[var(--color-navy)] transition-colors" />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-full bg-[var(--color-navy)] text-white text-sm font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
      >
        Submit Expression of Interest
      </button>
      <p className="text-xs text-[var(--color-muted)] text-center">
        Prototype: shows success state. Wire to real backend for production.
      </p>
    </form>
  );
}
