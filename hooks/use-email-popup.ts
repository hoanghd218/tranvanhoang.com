/**
 * useEmailPopup Hook
 *
 * Custom hook for managing email popup state with localStorage persistence.
 */

'use client';

import * as React from 'react';
import { PopupStorageState } from '@/types/email-popup';
import { EmailPopupSchema } from '@/lib/validations/email-popup';

const STORAGE_KEY = 'email-popup-state';
const DISMISS_DURATION_DAYS = 7;

interface UseEmailPopupReturn {
  /** Whether the popup should be shown to the user */
  shouldShowPopup: boolean;
  /** Whether the user has already submitted the form */
  hasSubmitted: boolean;
  /** Whether the hook has loaded (for SSR safety) */
  isLoaded: boolean;
  /** Open the popup */
  openPopup: () => void;
  /** Close the popup */
  closePopup: () => void;
  /** Mark popup as seen */
  markAsSeen: () => void;
  /** Mark as submitted with form data */
  markAsSubmitted: (data: EmailPopupSchema) => void;
  /** Dismiss for later (7 days) */
  dismissForLater: () => void;
  /** Whether popup is currently open */
  isOpen: boolean;
}

/**
 * Check if dismissed date is older than 7 days
 */
function isDismissExpired(dismissedAt: string): boolean {
  const dismissed = new Date(dismissedAt);
  const now = new Date();
  const diffTime = now.getTime() - dismissed.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays >= DISMISS_DURATION_DAYS;
}

/**
 * Get initial state from localStorage
 */
function getStorageState(): PopupStorageState {
  if (typeof window === 'undefined') {
    return { hasSeenPopup: false, hasSubmitted: false };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as PopupStorageState;
    }
  } catch (error) {
    console.error('Error reading popup state:', error);
  }

  return { hasSeenPopup: false, hasSubmitted: false };
}

/**
 * Save state to localStorage
 */
function saveStorageState(state: PopupStorageState): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving popup state:', error);
  }
}

export function useEmailPopup(): UseEmailPopupReturn {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState<PopupStorageState>({
    hasSeenPopup: false,
    hasSubmitted: false,
  });

  // Load state from localStorage on mount
  React.useEffect(() => {
    const loadedState = getStorageState();
    setState(loadedState);
    setIsLoaded(true);

    // Auto-show popup on first visit
    if (!loadedState.hasSeenPopup && !loadedState.hasSubmitted) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Check if dismissed but expired
    if (
      loadedState.dismissedAt &&
      isDismissExpired(loadedState.dismissedAt) &&
      !loadedState.hasSubmitted
    ) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Calculate if popup should show
  const shouldShowPopup = React.useMemo(() => {
    if (!isLoaded) return false;
    if (state.hasSubmitted) return false;
    if (state.dismissedAt) {
      return isDismissExpired(state.dismissedAt);
    }
    return !state.hasSeenPopup;
  }, [isLoaded, state]);

  const openPopup = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePopup = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const markAsSeen = React.useCallback(() => {
    const newState: PopupStorageState = {
      ...state,
      hasSeenPopup: true,
    };
    setState(newState);
    saveStorageState(newState);
  }, [state]);

  const markAsSubmitted = React.useCallback(
    (data: EmailPopupSchema) => {
      const newState: PopupStorageState = {
        hasSeenPopup: true,
        hasSubmitted: true,
      };
      setState(newState);
      saveStorageState(newState);

      // TODO: Send data to backend/email service
      console.log('Form submitted:', data);
    },
    []
  );

  const dismissForLater = React.useCallback(() => {
    const newState: PopupStorageState = {
      ...state,
      hasSeenPopup: true,
      dismissedAt: new Date().toISOString(),
    };
    setState(newState);
    saveStorageState(newState);
    setIsOpen(false);
  }, [state]);

  return {
    shouldShowPopup,
    hasSubmitted: state.hasSubmitted,
    isLoaded,
    isOpen,
    openPopup,
    closePopup,
    markAsSeen,
    markAsSubmitted,
    dismissForLater,
  };
}
