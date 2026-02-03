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
        className="sm:max-w-[500px] bg-card border-border p-0 gap-0 overflow-hidden"
        showCloseButton={false}
      >
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-coral/20 to-bronze/20 px-6 py-8">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-coral/20">
            <Gift className="h-8 w-8 text-coral" />
          </div>

          <DialogHeader className="mt-4 text-center">
            <DialogTitle className="text-2xl font-bold">
              Nhận quà miễn phí!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Điền thông tin để nhận tài nguyên AI hữu ích
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form or Success content */}
        <div className="px-6 py-6">
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
                  Tên của bạn <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Nguyễn Văn A"
                  {...register('name')}
                  className={cn(
                    errors.name && 'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  className={cn(
                    errors.email && 'border-destructive focus-visible:ring-destructive'
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Gift selection */}
              <GiftSelector
                value={selectedGifts}
                onChange={(value) => setValue('giftSelections', value, { shouldValidate: true })}
                error={errors.giftSelections?.message}
              />

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-coral hover:bg-coral-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang xử lý...' : 'Nhận quà ngay'}
              </Button>

              {/* Maybe later link */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
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
