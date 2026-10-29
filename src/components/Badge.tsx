"use client";

import React from 'react';

interface BadgeProps {
  text: string;
  variant?: 'teal' | 'yellow' | 'pink';
  icon?: 'star' | 'check' | 'none';
}

export default function Badge({ text, variant = 'teal', icon = 'none' }: BadgeProps) {
  
  const variants = {
    teal: 'bg-gjls-teal text-white',
    yellow: 'bg-gjls-yellow text-gjls-black',
    pink: 'bg-gjls-pink text-white',
  };

  const icons = {
    star: '☆',
    check: '✓',
    none: '',
  };

  return (
    <span className={`
      inline-flex items-center gap-2
      px-4 py-2
      border-2 border-gjls-black
      rounded-full
      font-display font-bold text-xs uppercase tracking-wider
      shadow-brutal-sm
      ${variants[variant]}
    `}>
      {icon !== 'none' && <span>{icons[icon]}</span>}
      {text}
    </span>
  );
}