import { FC, useCallback } from 'react';

import { Search } from 'src/assets';

import { Input, Select } from 'src/shared/components';
import {
  genderOptions,
  speciesOptions,
  statusesOptions,
} from 'src/shared/constants/options';
import { characterFiltersType } from 'src/shared/types/characterType';

import styles from './CharactersFilters.module.scss';

interface CharactersFiltersProps {
  filters: characterFiltersType;
  setFiletrs: (v: CharactersFiltersProps) => void;
}

const CharactersFilters: FC<CharactersFiltersProps> = ({
  filters,
  setFilters,
}) => {
  const onChangeFiletrs = useCallback(
    (value, id) => {
      setFilters((prev) => ({ ...prev, [id]: value }));
    },
    [setFilters]
  );

  return (
    <div className={styles.filters}>
      <Input
        icon={<Search />}
        placeholder='Filter by name'
        view='outlined'
        onChange={(v) => onChangeFiletrs(v, 'name')}
        value={filters.name}
      />
      <Select
        options={speciesOptions}
        placeholder='Species'
        onSelect={(v) => onChangeFiletrs(v, 'species')}
        value={filters.species}
      />
      <Select
        options={genderOptions}
        placeholder='Gender'
        onSelect={(v) => onChangeFiletrs(v, 'gender')}
        value={filters.gender}
      />
      <Select
        options={statusesOptions}
        placeholder='Status'
        onSelect={(v) => onChangeFiletrs(v, 'status')}
        value={filters.status}
      />
    </div>
  );
};

export default CharactersFilters;
