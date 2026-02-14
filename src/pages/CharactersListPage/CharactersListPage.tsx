import { useCallback } from 'react';

import { RickAndMorty } from 'src/assets';

import { InfiniteScroll, Loader } from 'src/shared/components';
import { useLoadCharacters } from 'src/shared/hooks';

import { CharacterCard, CharactersFilters } from 'src/widgets';

import styles from './CharactersListPage.module.scss';

const CharactersListPage = () => {
  const {
    characters,
    setCharacters,
    filters,
    setFilters,
    loadMore,
    isLoadingMore,
    isLoadingPage,
    needLoadMore,
  } = useLoadCharacters();

  const onEditCharacter = useCallback(
    (character) => {
      setCharacters((prev) =>
        prev.map((el) => {
          if (el.id === character.id) {
            return {
              ...el,
              name: character.name,
              location: {
                ...el.location,
                name: character.location,
              },
              status: character.status,
            };
          }
          return el;
        }),
      );
    },
    [setCharacters],
  );

  return (
    <div className={styles.characters}>
      <img
        src={RickAndMorty}
        alt='Rick and Morty'
        className={styles.characters__logo}
      />

      <div className={styles.characters__content}>
        <CharactersFilters filters={filters} setFilters={setFilters} />
        {isLoadingPage ? (
          <Loader title='Loading characters...' />
        ) : (
          <>
            {characters.length ? (
              <div className={styles.characters__cards}>
                {characters.map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    onEditCharacter={onEditCharacter}
                  />
                ))}
              </div>
            ) : (
              <p className={styles.characters__empty}>
                Characters list is empty...
              </p>
            )}
            <InfiniteScroll
              isLoading={isLoadingMore}
              needLoadMore={needLoadMore}
              loadMore={loadMore}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CharactersListPage;
