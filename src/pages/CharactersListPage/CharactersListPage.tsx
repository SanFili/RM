import { memo } from 'react';

import { RickAndMorty } from 'src/assets';

import { Loader } from 'src/shared/components';
import { useLoadCharacters } from 'src/shared/hooks';
import { characterType } from 'src/shared/types';

import { CharacterCard, CharactersFilters } from 'src/widgets';

import InfiniteScroll from '../../shared/components/InfiniteScroll/InfiniteScroll';
import styles from './CharactersListPage.module.scss';

const CharactersListPage = () => {
  const {
    characters,
    filters,
    setFilters,
    isLoading,
    loadMore,
    isLoadingMore,
  } = useLoadCharacters();

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
        ) : (
          <>
            {characters.length ? (
              <CharactersList characters={characters} />
            ) : (
              <p className={styles.characters__empty}>
                Characters list is empty...
              </p>
            )}
            <InfiniteScroll isLoading={isLoadingMore} loadMore={loadMore} />
          </>
        )}
      </div>
    </div>
  );
};

const CharactersList = memo(
  ({ characters }: { characters: characterType[] }) => {
    return (
      <div className={styles.characters__cards}>
        {characters.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </div>
    );
  },
);

export default CharactersListPage;
