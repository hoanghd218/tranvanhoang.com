/**
 * Email Capture Popup Component
 *
 * Main popup modal for capturing visitor email and name in exchange for a gift.
 */

'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GiftSelector } from './gift-selector';
import { SuccessView } from './success-view';
import { emailPopupSchema, EmailPopupSchema } from '@/lib/validations/email-popup';
import { cn } from '@/lib/utils';

interface EmailCapturePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EmailPopupSchema) => void;
  hasSubmitted: boolean;
}

export function EmailCapturePopup({
  isOpen,
  onClose,
  onSubmit,
  hasSubmitted,
}: EmailCapturePopupProps) {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<EmailPopupSchema | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailPopupSchema>({
    resolver: zodResolver(emailPopupSchema),
    defaultValues: {
      name: '',
      email: '',
      giftSelections: [],
    },
  });

  const selectedGifts = watch('giftSelections') || [];

  // Reset form when popup opens
  React.useEffect(() => {
    if (isOpen) {
      reset();
      setShowSuccess(false);
      setSubmittedData(null);
    }
  }, [isOpen, reset]);

  // Show success if already submitted
  React.useEffect(() => {
    if (hasSubmitted && isOpen) {
      setShowSuccess(true);
    }
  }, [hasSubmitted, isOpen]);

  const handleFormSubmit = async (data: EmailPopupSchema) => {
    setSubmittedData(data);
    onSubmit(data);
    setShowSuccess(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setShowSuccess(false);
      setSubmittedData(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="gap-0 overflow-hidden p-0 sm:max-w-[500px]"
        showCloseButton={false}
      >
        {/* Header — flat surface, one hairline. No coloured chrome. */}
        <div className="relative border-b border-hairline px-[var(--space-5)] pt-[var(--space-5)] pb-[var(--space-4)]">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 rounded-[var(--radius-sm)] p-1 text-text-tertiary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-surface-overlay hover:text-text-primary"
          >
            <X size={16} strokeWidth={1.75} />
            <span className="sr-only">Close</span>
          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
            <Gift size={24} strokeWidth={1.75} className="text-rocket" />
          </div>

          <DialogHeader className="mt-[var(--space-4)] text-left sm:text-left">
            <DialogTitle className="text-[length:var(--size-h3)] font-bold">
              Nhận quà miễn phí.
            </DialogTitle>
            <DialogDescription className="text-text-secondary">
              Điền thông tin để nhận tài nguyên AI hữu ích.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form or Success content */}
        <div className="px-[var(--space-5)] py-[var(--space-5)]">
          {showSuccess && submittedData ? (
            <SuccessView
              giftSelections={submittedData.giftSelections}
              email={submittedData.email}
              onClose={handleClose}
            />
          ) : (
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
              {/* Name field */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Tên của bạn <span className="text-status-critical">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Nguyễn Văn A"
                  {...register('name')}
                  aria-invalid={!!errors.name}
                  className={cn(errors.name && 'border-[var(--status-critical)]')}
                />
                {errors.name && (
                  <p className="text-[length:var(--size-body-s)] text-status-critical">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-status-critical">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  aria-invalid={!!errors.email}
                  className={cn(errors.email && 'border-[var(--status-critical)]')}
                />
                {errors.email && (
                  <p className="text-[length:var(--size-body-s)] text-status-critical">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Gift selection */}
              <GiftSelector
                value={selectedGifts}
                onChange={(value) => setValue('giftSelections', value, { shouldValidate: true })}
                error={errors.giftSelections?.message}
              />

              {/* The one primary button in this view */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Đang xử lý...' : 'Nhận quà ngay'}
              </Button>

              {/* Maybe later link */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full text-center text-[length:var(--size-body-s)] text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
              >
                Để sau
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
