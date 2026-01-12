import React, { FC } from 'react';

import styles from './FormItem.module.scss';

interface FormItemProps {
  label?: string;
  name?: string;
}

const FormItem: FC<FormItemProps> = ({ label, name, onClick, children }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { name });
    }
    return child;
  });

  return (
    <div classNames={styles.formItem} onClick={onClick}>
      {label ? (
        <label htmlFor={name} className={styles.formItem__label}>
          {label}
        </label>
      ) : null}
      {childrenWithProps}
    </div>
  );
};

export default FormItem;
