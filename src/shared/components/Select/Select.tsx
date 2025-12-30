import { FC, useMemo, useState, useCallback, useRef } from 'react';
import cn from 'classnames';
import { ArrowDropdown } from 'src/assets';
import { useClickOutside } from 'src/shared/hooks';

import styles from './Select.module.scss';

interface ISelectProps {
  value: string | null;
  options: { value: string; label: string | Element }[];
  onSelect: (v: string) => void;
  size?: 'small' | 'large';
  placeholder?: string;
  className?: string;
}

const Select: FC<ISelectProps> = ({
  value,
  options,
  onSelect,
  size = 'large',
  placeholder,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(handleClose, ref);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleSelect = useCallback(
    (v) => {
      onSelect(v);
      handleClose();
    },
    [handleClose, onSelect]
  );

  const selected = useMemo(
    () => options.find((el) => el.value === value)?.label ?? null,
    [value, options]
  );

  return (
    <div
      className={cn(
        styles.select,
        styles[`select_${size}`],
        !isOpen && styles.select_close,
        className
      )}
      ref={ref}
    >
      <button className={cn(styles.select__input)} onClick={handleToggle}>
        <div>{selected ?? placeholder}</div>
        <ArrowDropdown className={styles.select__icon} />
      </button>

      <ul className={styles.select__dropdown}>
        {options.map((option) => (
          <li
            key={option.key}
            onClick={() => handleSelect(option.value)}
            className={styles.select__item}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
