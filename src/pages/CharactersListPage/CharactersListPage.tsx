import { useEffect, useRef, useState } from 'react';

import { RickAndMorty } from 'src/assets';

import { Loader } from 'src/shared/components';
import { characterFiltersType, characterType } from 'src/shared/types';
import { debounce, getData } from 'src/shared/utils';

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

  const getCharactersList = async (params, signal) => {
    setIsLoading(true);

    const res = await getData({
      url: `/character`,
      params,
      signal,
      errorMessage: 'Couldn`t load the list of characters.',
    });

    if (res.results) setCharacters(res.results);

    setIsLoading(false);
  };

  const debouncedFetch = useRef(debounce(getCharactersList, 300));

  useEffect(() => {
    const controller = new AbortController();
    //  const searchParams = new URLSearchParams(filters);

    debouncedFetch.current(filters, controller.signal);

    return () => controller.abort();
  }, [filters]);

  return (
    <div className={styles.characters}>
      <img
        src={RickAndMorty}
        alt='Rick and Morty'
        className={styles.characters__logo}
      />
      <div className={styles.characters__content}>
        <CharactersFilters filters={filters} setFilters={setFilters} />
        {isLoading ? (
          <Loader title='Loading characters...' />
        ) : characters.length ? (
          <div className={styles.characters__cards}>
            {characters.map((character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
          </div>
        ) : (
          <p className={styles.characters__empty}>
            Characters list is empty...
          </p>
        )}
      </div>
    </div>
  );
};

export default CharactersListPage;
