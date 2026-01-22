import { Toaster } from 'react-hot-toast';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>{children}</main>
      <Footer />
      <Toaster
        position='bottom-right'
        containerStyle={{
          bottom: 85,
        }}
        toastOptions={{
          error: {
            style: {
              background: '#FFF5F3',
              border: '1px solid #F4B0A1',
            },
          },
        }}
      />
    </div>
  );
};

export default Layout;
