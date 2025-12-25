import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles['layout__header']}>header</header>
      <main className={styles['layout__content']}>{children}</main>
      <footer className={styles['layout__footer']}>footer</footer>
    </div>
  );
};

export default Layout;
