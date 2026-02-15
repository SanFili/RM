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
    <div className={cn(styles.loader, styles[`loader_${size}`], className)}>
      <div className={styles.loader__inner}>
        <img src={Loading} alt='Loading...' className={styles.loader__image} />
        {title ? <p className={styles.loader__title}>{title}</p> : null}
      </div>
    </div>
  );
};

export default Loader;
