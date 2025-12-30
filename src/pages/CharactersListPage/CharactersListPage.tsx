import { useState } from 'react';
import { Loader, Select } from 'src/shared/components';
import { RickAndMorty } from 'src/assets';
import cn from 'classnames';

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
          {/* Селекты добавлены для примера */}
          <Select
            placeholder='Species'
            options={species}
            onSelect={(el) => setValue(el)}
            value={value}
          />
          <div style={{ marginTop: 50 }}></div>
          <Select
            options={statuses.map((el) => ({
              value: el.value,
              label: (
                <div
                  className={cn(styles.status, styles[`status_${el.value}`])}
                >
                  <p>{el.label}</p>
                  <span />
                </div>
              ),
            }))}
            onSelect={(el) => setValue(el)}
            value={value}
            size='small'
          />
        </div>
      )}
    </div>
  );
};

export default CharactersListPage;
