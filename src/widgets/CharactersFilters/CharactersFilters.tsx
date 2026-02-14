import { FC, useCallback } from 'react';

import { Search } from 'src/assets';

import { Input, Select } from 'src/shared/components';
import {
  genderOptions,
  speciesOptions,
  statusesOptions,
} from 'src/shared/constants';
import { characterFiltersType } from 'src/shared/types';

import styles from './CharactersFilters.module.scss';

interface CharactersFiltersProps {
  filters: characterFiltersType;
  setFilters: (v: CharactersFiltersProps) => void;
}

const CharactersFilters: FC<CharactersFiltersProps> = ({
  filters,
  setFilters,
}) => {
  const onChangeFilters = useCallback(
    (value, id) => {
      setFilters((prev) => ({ ...prev, [id]: value }));
    },
    [setFilters],
  );

  return (
    <div className={styles.filters}>
      <Input
        icon={<Search />}
        placeholder='Filter by name'
        view='outlined'
        onChange={onChangeFilters}
        name='name'
        value={filters.name}
      />
      <Select
        options={speciesOptions}
        placeholder='Species'
        onSelect={onChangeFilters}
        name='species'
        value={filters.species}
      />
      <Select
        options={genderOptions}
        placeholder='Gender'
        onSelect={onChangeFilters}
        naem='gender'
        value={filters.gender}
      />
      <Select
        options={statusesOptions}
        placeholder='Status'
        onSelect={onChangeFilters}
        name='status'
        value={filters.status}
      />
    </div>
  );
};

export default CharactersFilters;
