/**
 * Email Popup Validation Schema
 *
 * Zod schema for validating email popup form data.
 */

import { z } from 'zod';
import { GiftOption } from '@/types/email-popup';

/**
 * Zod schema for email popup form validation
 */
export const emailPopupSchema = z.object({
  name: z
    .string()
    .min(1, 'Vui lòng nhập tên của bạn')
    .max(100, 'Tên không được quá 100 ký tự'),
  email: z
    .string()
    .min(1, 'Vui lòng nhập email')
    .email('Email không hợp lệ'),
  giftSelections: z.array(z.nativeEnum(GiftOption)).min(1, 'Vui lòng chọn ít nhất một món quà'),
});

/**
 * Type inferred from the email popup schema
 */
export type EmailPopupSchema = z.infer<typeof emailPopupSchema>;
