import input from '@/shared/ui/input/input.module.sass';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface TextFieldProps {
  placeholder?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | null;
}

export const InputFile: React.FC<TextFieldProps> = ({
  id,
  placeholder,
  onChange,
  value,
}) => {
  const uuid = id ?? uuidv4();
  return (
    <div className={input.input_container}>
      <input
        type={'file'}
        id={id ?? uuid}
        value={value ?? ''}
        placeholder={placeholder ?? ''}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        required
      />
      <label htmlFor={uuid}>{placeholder ?? ''}</label>
    </div>
  );
};
