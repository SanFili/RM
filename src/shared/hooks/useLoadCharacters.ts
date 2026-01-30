import { useCallback, useEffect, useRef, useState } from 'react';

import { characterFiltersType, characterType } from 'src/shared/types';
import { debounce, getData } from 'src/shared/utils';

const DEFAULT_FILTERS = {
  name: '',
  species: '',
  gender: '',
  status: '',
};
const DEFAULT_PAGE = 1;

const useLoadCharacters = () => {
  const [characters, setCharacters] = useState<characterType[]>([]);
  const [filters, setFilters] = useState<characterFiltersType>(DEFAULT_FILTERS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState<number>(DEFAULT_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const getCharactersList = useCallback(
    async (params) => {
      abortControllerRef.current?.abort();

      abortControllerRef.current = new AbortController();

      if (page === DEFAULT_PAGE) setIsLoading(true);

      const res = await getData({
        url: `/character`,
        params,
        signal: abortControllerRef.current.signal,
        errorMessage: 'Couldn`t load the list of characters.',
      });

      if (res.results) {
        setCharacters((prev) =>
          page === DEFAULT_PAGE ? res.results : [...prev, ...res.results],
        );
      }
      if (res.info) setTotalPages(res.info.pages);

      setIsLoading(false);
    },
    [page],
  );

  const loadMore = useCallback(() => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }, [page, totalPages]);

  const debouncedFetch = useRef(debounce(getCharactersList, 300));

  useEffect(() => {
    setPage(DEFAULT_PAGE);
    setTotalPages(DEFAULT_PAGE);

    debouncedFetch.current({ page: DEFAULT_PAGE, ...filters });

    return () => abortControllerRef.current?.abort();
  }, [filters]);

  useEffect(() => {
    setIsLoadingMore(page < totalPages);

    if (page === DEFAULT_PAGE) return;

    getCharactersList({ page, ...filters });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages]);

  return {
    characters,
    filters,
    setFilters,
    isLoading,
    setPage,
    totalPages,
    loadMore,
    isLoadingMore,
  };
};

export default useLoadCharacters;
