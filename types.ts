
// Fix: Import React to resolve the "Cannot find namespace 'React'" error in TypeScript
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
