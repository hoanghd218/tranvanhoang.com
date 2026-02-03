/**
 * Email Capture Popup Client Component
 *
 * Client-side component that handles the popup with dynamic import.
 */

'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import { useEmailPopup } from '@/hooks/use-email-popup';
import { EmailPopupSchema } from '@/lib/validations/email-popup';

// Dynamically import the popup component (client-side only)
const EmailCapturePopup = dynamic(
  () => import('./email-capture-popup').then((mod) => mod.EmailCapturePopup),
  { ssr: false }
);

export function EmailCapturePopupClient() {
  const {
    isOpen,
    markAsSubmitted,
    dismissForLater,
    hasSubmitted,
  } = useEmailPopup();

  const handleClose = () => {
    dismissForLater();
  };

  const handleSubmit = (data: EmailPopupSchema) => {
    markAsSubmitted(data);
  };

  return (
    <EmailCapturePopup
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      hasSubmitted={hasSubmitted}
    />
  );
}
