import { FC, MouseEvent } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  onClick: (e: MouseEvent) => void;
  size?: 'small' | 'large';
  className?: string;
}

const Button: FC<IButtonProps> = ({
  onClick,
  size = 'large',
  className,
  children,
}) => {
  return (
    <button
      className={cn(styles.button, styles[`button_${size}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
