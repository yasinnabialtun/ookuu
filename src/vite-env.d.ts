/// <reference types="vite/client" />

// Calendly global object declaration
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
      initBadgeWidget: (options: {
        url: string;
        text?: string;
        color?: string;
        textColor?: string;
        branding?: boolean;
      }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
        minWidth?: string;
        height?: string;
      }) => void;
      closePopupWidget: () => void;
    };
  }
}

export {};
