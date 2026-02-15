import { Link } from 'react-router-dom';

import { NotFound } from 'src/assets';

import { Button } from 'src/shared/components';
import { CHARACTERS_LIST_PAGE } from 'src/shared/constants';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <img src={NotFound} />
      <Link to={CHARACTERS_LIST_PAGE} rel='noopener noreferrer'>
        <Button>Go to main page</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
