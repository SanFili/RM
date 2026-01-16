import { useState } from 'react';

import { RickAndMorty } from 'src/assets';

import { Loader } from 'src/shared/components';
import { characterFiltersType, characterType } from 'src/shared/types';

import { CharacterCard, CharactersFilters } from 'src/widgets';

import styles from './CharactersListPage.module.scss';

const characters: characterType[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

const CharactersListPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<characterFiltersType>({
    name: '',
    species: '',
    gender: '',
    status: '',
  });

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
