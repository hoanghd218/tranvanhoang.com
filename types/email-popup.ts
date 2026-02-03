/**
 * Email Popup Types
 *
 * Type definitions for the email capture popup feature.
 */

/**
 * Available gift options for the email popup
 */
export enum GiftOption {
  AI_AGENTS_MARKETING = 'ai-agents-marketing',
  REVIT_API_TEMPLATE = 'revit-api-template',
  VIBE_CODING_TEMPLATE = 'vibe-coding-template',
}

/**
 * Form data structure for email popup
 */
export interface EmailPopupFormData {
  name: string;
  email: string;
  giftSelections: GiftOption[];
}

/**
 * Storage state for tracking popup interactions
 */
export interface PopupStorageState {
  hasSeenPopup: boolean;
  hasSubmitted: boolean;
  dismissedAt?: string;
}

/**
 * Gift option display data
 */
export interface GiftOptionData {
  id: GiftOption;
  title: string;
  description: string;
  iconName: 'Bot' | 'Code' | 'Sparkles';
}
