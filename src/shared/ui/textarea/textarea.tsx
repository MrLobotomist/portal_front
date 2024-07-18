import input from '@/shared/ui/textarea/textarea.module.sass';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TextFieldProps {
  placeholder?: string;
  id?: string;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'url'
    | 'date'
    | 'textarea'
    | 'file'
    | 'paper';
  onChange?: (val: string) => void;
  value?: string | number | null;
}

export const Textarea: React.FC<TextFieldProps> = ({
  type,
  id,
  placeholder,
  onChange,
  value,
}) => {
  const uuid = id ?? uuidv4();
  return (
    <div className={input.input_container}>
      {type != 'textarea' ? (
        <input
          type={type ?? 'text'}
          id={uuid}
          value={value ?? ''}
          placeholder={placeholder ?? ''}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          required
        />
      ) : (
        <textarea
          className={input.textarea}
          id={uuid}
          value={value ?? ''}
          placeholder={placeholder ?? ''}
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
          required
        />
      )}
      <label htmlFor={uuid}>{placeholder ?? ''}</label>
    </div>
  );
};
