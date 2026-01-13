import { FC, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { characterType } from 'src/shared/types';
import { Input, Select, FormItem } from 'src/shared/components';
import { Edit, Close, Check } from 'src/assets';

import styles from './CharacterCard.module.scss';
import { CHARACTER_INFO_PAGE } from 'src/shared/constants/urls';

interface CharacterCardProps {
  data: characterType;
}

const statuses = [
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'Unknown', label: 'Unknown' },
];

const CharacterCard: FC<CharacterCardProps> = ({ data }) => {
  const { id, name, image, gender, species, location, status } = data;
  const [disabled, setDisabled] = useState(true);

  const LinkEl = useMemo(() => (disabled ? Link : 'div'), [disabled]);

  return (
    <div className={styles.card}>
      <img className={styles.card__photo} src={image} alt={name} />
      <form className={styles.card__form}>
        <FormItem name='name'>
          <LinkEl
            to={`/character-info/${id}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Input value={name} disabled={disabled} />
          </LinkEl>
        </FormItem>
        <FormItem name='gender' label='Gender'>
          <Input value={gender} view='small' disabled />
        </FormItem>
        <FormItem name='species' label='Species'>
          <Input value={species} view='small' disabled />
        </FormItem>
        <FormItem name='location' label='Location'>
          <Input value={location.name} view='small' disabled={disabled} />
        </FormItem>
        <FormItem name='status' label='Status'>
          <Select
            options={statuses.map((el) => ({
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
            value={status}
            size='small'
            disabled={disabled}
          />
        </FormItem>
        <div className={styles.card__buttons}>
          {disabled ? (
            <Edit
              onClick={() => setDisabled(false)}
              className={styles.card__edit}
            />
          ) : (
            <>
              <Close onClick={() => setDisabled(true)} />
              <Check onClick={() => setDisabled(true)} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default CharacterCard;
