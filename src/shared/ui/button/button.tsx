import btn from '@/shared/ui/button/button.module.sass';
import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'action';
}

export const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  let className = '';
  switch (variant) {
    case 'primary':
      className = btn.button_primary;
      break;
    case 'secondary':
      className = btn.button_secondary;
      break;
    case 'action':
      className = btn.action_button;
      break;
    default:
      className = btn.button_primary;
      break;
  }
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {text}
    </button>
  );
};
