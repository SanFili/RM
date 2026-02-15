import { useNavigate, useParams } from 'react-router';

import { Arrow } from 'src/assets';

import { Loader } from 'src/shared/components';
import { NOT_FOUND_PAGE } from 'src/shared/constants';
import { useLoadCharacter } from 'src/shared/hooks';

import styles from './CharacterInfoPage.module.scss';

const CharacterInfoPage = () => {
  const { id } = useParams();
  const { character, isLoading, isNotFound } = useLoadCharacter(id);
  const navigate = useNavigate();

  if (isNotFound) navigate(NOT_FOUND_PAGE);

  return (
    <div className={styles.character}>
      <button className={styles.character__navigation}>
        <Arrow />
        GO BACK
      </button>
      {isLoading ? (
        <Loader title='Loading character card...' />
      ) : isNotFound ? (
        // TODO 404
        <p>Character not found</p>
      ) : (
        <div className={styles.character__info}>
          <img
            className={styles.character__photo}
            src={character.image}
            alt={character.name}
          />
          <h1 className={styles.character__title}>{character.name}</h1>
          <h2 className={styles.character__subtitle}>Information</h2>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Gender</p>
            <p className={styles.character__value}>{character.gender}</p>
          </div>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Status</p>
            <p className={styles.character__value}>{character.status}</p>
          </div>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Species</p>
            <p className={styles.character__value}>{character.species}</p>
          </div>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Origin</p>
            <p className={styles.character__value}>{character.origin?.name}</p>
          </div>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Type</p>
            <p className={styles.character__value}>{character.type}</p>
          </div>
          <div className={styles.character__item}>
            <p className={styles.character__name}>Location</p>
            <p className={styles.character__value}>
              {character.location?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterInfoPage;
