import React from 'react';
import grid from '@/shared/styles/grid.module.sass';
import { Button } from '@/shared/ui/button/button.tsx';

interface CheckboxProps {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange();
  };

  return (
    <Button
      text={
        <div className={grid.container}>
          <div className={grid.row}>
            <div className={grid.col_3}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                style={{ width: '30px', height: '30px' }}
              />
            </div>
            <div className={grid.col_9}>
              <p>{label}</p>
            </div>
          </div>
        </div>
      }
      variant={'secondary'}
      onClick={() => handleCheckboxChange()}
    />
  );
};

export default Checkbox;
