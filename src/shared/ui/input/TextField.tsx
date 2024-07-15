import input from '@/shared/ui/input/input.module.sass';
import React from 'react';

interface TextFieldProps {
  placeholder: string;
  id: string;
}

export const TextField: React.FC<TextFieldProps> = ({ id, placeholder }) => {
  return (
    <div className={input.input_container}>
      <input type="text" id={id} placeholder={placeholder} required />
      <label htmlFor="name">Name</label>
    </div>
  );
};
