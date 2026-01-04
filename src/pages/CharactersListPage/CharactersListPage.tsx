import { useState } from 'react';
import cn from 'classnames';

import { RickAndMorty, Search } from 'src/assets';

import { Input, Loader } from 'src/shared/components';

import styles from './CharactersListPage.module.scss';

const species = [
  { value: '1', label: 'Human' },
  { value: '2', label: 'Alien' },
  { value: '3', label: 'Humanoid' },
  { value: '4', label: 'Animal' },
  { value: '5', label: 'Robot' },
];

const statuses = [
  { value: 'alive', label: 'Alive' },
  { value: 'dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
];

const CharactersListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);

  const onChange = (inputValue) => setValue(inputValue);

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
        <div className={styles.characters__content}>
          {/* Инпуты добавлены для примера */}
          <div style={{ display: 'flex', gap: 40 }}>
            <Input
              value={value}
              placeholder='Filter by name...'
              onChange={onChange}
            />
            <Input
              value={value}
              placeholder='Filter by name...'
              onChange={onChange}
              icon={<Search />}
              type='outlined'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharactersListPage;
