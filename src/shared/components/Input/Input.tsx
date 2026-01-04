import { FC, useCallback } from 'react';
import cn from 'classnames';

import { Close } from 'src/assets';

import styles from './Input.module.scss';

interface IInputProps {
  value: string | null;
  onChange: (v: string) => void;
  name: string;
  type?: 'outlined' | 'underlined';
  icon?: SVGElement;
  placeholder?: string;
  className?: string;
}

const Input: FC<IInputProps> = ({
  value,
  onChange,
  name,
  type = 'underlined',
  icon,
  placeholder,
  className,
}) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  const handleClear = useCallback(() => {
    onChange('');
  }, [onChange]);

  return (
    <div className={cn(styles.input, styles[`input_${type}`], className)}>
      {icon ? <div className={styles.input__icon}>{icon}</div> : null}
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.input__textbox}
      />
      {value?.length > 0 ? (
        <Close onClick={handleClear} className={styles.input__clear} />
      ) : null}
    </div>
  );
};

export default Input;
