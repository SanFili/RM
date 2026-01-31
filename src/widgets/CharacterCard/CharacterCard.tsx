import { FC, memo, useCallback, useMemo, useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Check, Close, Edit } from 'src/assets';

import { Input, Select } from 'src/shared/components';
import { statusesOptions } from 'src/shared/constants/options';
import { characterCardType } from 'src/shared/types';

import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  data: characterCardType;
  onEditCharacter: (v: characterCardType) => void;
}

const CharacterCard: FC<CharacterCardProps> = ({ data, onEditCharacter }) => {
  const [characterData, setCharacterData] = useState<characterCardType>(data);
  const [disabled, setDisabled] = useState(true);

  const onChangeCharacter = useCallback(
    (value, id) => {
      setCharacterData((prev) => ({ ...prev, [id]: value }));
    },
    [setCharacterData],
  );

  const handleSaveEditing = () => {
    setDisabled(true);
    onEditCharacter(characterData);
  };

  const handleCancelEditing = () => {
    setDisabled(true);
    setCharacterData(data);
  };

  const LinkEl = useMemo(() => (disabled ? Link : 'div'), [disabled]);

  return (
    <div className={styles.card}>
      <img className={styles.card__photo} src={data.image} alt={data.name} />
      <form className={styles.card__form}>
        <LinkEl
          to={`/character-info/${data.id}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Input
            value={characterData.name}
            disabled={disabled}
            name='name'
            onChange={(value) => onChangeCharacter(value, 'name')}
          />
        </LinkEl>
        <label className={styles.card__label}>
          Gender
          <Input
            value={characterData.gender}
            view='small'
            disabled
            name='gender'
          />
        </label>
        <label className={styles.card__label}>
          Species
          <Input
            value={characterData.species}
            view='small'
            disabled
            name='species'
          />
        </label>
        <label className={styles.card__label}>
          Location
          <Input
            value={characterData.location}
            view='small'
            disabled={disabled}
            name='location'
            onChange={(value) => onChangeCharacter(value, 'location')}
          />
        </label>
        <label className={styles.card__label}>
          Status
          <Select
            options={statusesOptions.map((el) => ({
              value: el.value,
              label: (
                <div
                  key={el.value}
                  className={cn(styles.status, styles[`status_${el.value}`])}
                >
                  <p>{el.label}</p>
                  <span />
                </div>
              ),
            }))}
            value={characterData.status.toLowerCase()}
            size='small'
            name='status'
            disabled={disabled}
            onSelect={(value) => onChangeCharacter(value, 'status')}
          />
        </label>
        <div className={styles.card__buttons}>
          {disabled ? (
            <Edit
              onClick={() => setDisabled(false)}
              className={styles.card__edit}
            />
          ) : (
            <>
              <Close onClick={handleCancelEditing} />
              <Check onClick={handleSaveEditing} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default CharacterCard;
