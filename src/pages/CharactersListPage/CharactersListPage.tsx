import { useState } from 'react';
import { Loader } from 'src/shared/components';
import { RickAndMorty } from 'src/assets';

import styles from './CharactersListPage.module.scss';

const CharactersListPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.characters}>
      <img
        src={RickAndMorty}
        alt='Rick and Morty'
        className={styles.characters__logo}
      />
      {isLoading ? (
        <Loader title='Loading characters...' />
      ) : (
        <div className={styles.characters__content}>content</div>
      )}
    </div>
  );
};

export default CharactersListPage;
