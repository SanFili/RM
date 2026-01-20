import { useEffect, useState } from 'react';

import { RickAndMorty } from 'src/assets';

import { Loader } from 'src/shared/components';
import { characterFiltersType, characterType } from 'src/shared/types';
import { getData } from 'src/shared/utils/restApi';

import { CharacterCard, CharactersFilters } from 'src/widgets';

import styles from './CharactersListPage.module.scss';

const CharactersListPage = () => {
  const [characters, setCharacters] = useState<characterType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<characterFiltersType>({
    name: '',
    species: '',
    gender: '',
    status: '',
  });

  const getCharactersList = async () => {
    setIsLoading(true);

    const res = await getData({
      url: '/character',
      errorMessage: 'Не удалось загрузить список персонажей.',
    });

    if (res.results) setCharacters(res.results);

    setIsLoading(false);
  };

  useEffect(() => {
    getCharactersList();
  }, []);

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
          <CharactersFilters filters={filters} setFilters={setFilters} />
          <div className={styles.characters__cards}>
            {characters.map((character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharactersListPage;
