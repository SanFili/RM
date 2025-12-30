import { FC } from 'react';
import cn from 'classnames';
import { Loading } from 'src/assets';

import styles from './Loader.module.scss';

interface ILoaderProps {
  title?: string;
  size?: 'small' | 'large';
  className;
}

const Loader: FC<ILoaderProps> = ({ title, size = 'large', className }) => {
  return (
    <div className={cn(styles.loader, className)}>
      <img
        src={Loading}
        alt='Loading...'
        className={cn(styles.loader__image, styles[`loader__image_${size}`])}
      />
      {title ? <p className={styles.loader__title}>{title}</p> : null}
    </div>
  );
};

export default Loader;
