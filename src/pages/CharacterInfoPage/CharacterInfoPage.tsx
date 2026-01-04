import { useState } from 'react';

import { Arrow } from 'src/assets';

import { Loader } from 'src/shared/components';

import styles from './CharacterInfoPage.module.scss';

const CharacterInfoPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.character}>
      <button className={styles.character__navigation}>
        <Arrow />
        GO BACK
      </button>
      {isLoading ? (
        <Loader title='Loading character card...' />
      ) : (
        <div>character</div>
      )}
    </div>
  );
};

export default CharacterInfoPage;
