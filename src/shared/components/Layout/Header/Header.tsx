import { Logo, LightTheme } from 'src/assets';
import { Button } from 'src/shared/components';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__settings}>
        <Button size='small'>
          <LightTheme />
        </Button>
        <Button size='small' className={styles.header__language}>
          РУ
        </Button>
      </div>
    </header>
  );
};

export default Header;
