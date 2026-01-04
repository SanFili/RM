import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
