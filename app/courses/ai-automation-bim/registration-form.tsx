"use client";

import { useState, FormEvent } from "react";
import { Send, MessageCircle, Phone } from "lucide-react";
import type { FormTexts } from "./i18n";

type RegistrationFormProps = {
  texts: FormTexts;
  contactName: string;
  contactPhone: string;
  zaloLink: string;
  facebookLink: string;
};

export function RegistrationForm({
  texts,
  contactName,
  contactPhone,
  zaloLink,
  facebookLink,
}: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold mb-2">{texts.successTitle}</h3>
        <p className="text-muted-foreground">{texts.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            {texts.nameLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={texts.namePlaceholder}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            {texts.emailLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="email@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            {texts.phoneLabel} <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder={texts.phonePlaceholder}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
          />
        </div>
        <div>
          <label htmlFor="note" className="block text-sm font-medium mb-1.5">
            {texts.noteLabel}
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            placeholder={texts.notePlaceholder}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors disabled:opacity-60"
        >
          <Send className="w-4 h-4" />
          {loading ? texts.submitting : texts.submit}
        </button>
      </form>

      {/* Contact info */}
      <div className="p-4 bg-card border border-border rounded-xl text-center">
        <p className="text-sm text-muted-foreground mb-1">{texts.contactDirect}</p>
        <a
          href={`tel:${contactPhone}`}
          className="inline-flex items-center gap-2 text-lg font-semibold text-coral hover:text-coral-dark transition-colors"
        >
          <Phone className="w-4 h-4" />
          {contactName}: {contactPhone}
        </a>
      </div>

      {/* Contact links */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={zaloLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-blue-500 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Chat Zalo
        </a>
        <a
          href={facebookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-blue-700 text-blue-700 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </a>
      </div>
    </div>
  );
}
