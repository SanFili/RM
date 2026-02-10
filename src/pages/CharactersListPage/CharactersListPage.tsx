import { memo, useCallback } from 'react';

import { RickAndMorty } from 'src/assets';

import { InfiniteScroll, Loader } from 'src/shared/components';
import { useLoadCharacters } from 'src/shared/hooks';
import { characterCardType, characterType } from 'src/shared/types';

import { CharacterCard, CharactersFilters } from 'src/widgets';

import styles from './CharactersListPage.module.scss';

const CharactersListPage = () => {
  const {
    characters,
    setCharacters,
    filters,
    setFilters,
    isLoading,
    loadMore,
    isLoadingMore,
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
        {isLoading ? (
          <Loader title='Loading characters...' />
        ) : (
          <>
            {characters.length ? (
              <CharactersList
                characters={characters}
                onEditCharacter={onEditCharacter}
              />
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
  ({
    characters,
    onEditCharacter,
  }: {
    characters: characterType[];
    onEditCharacter: (v: characterCardType) => void;
  }) => {
    return (
      <div className={styles.characters__cards}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            data={{
              id: character.id,
              name: character.name,
              status: character.status,
              species: character.species,
              gender: character.gender,
              location: character.location.name,
              image: character.image,
            }}
            onEditCharacter={onEditCharacter}
          />
        ))}
      </div>
    );
  },
);

export default CharactersListPage;
