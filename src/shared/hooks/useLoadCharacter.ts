import { useEffect, useState } from 'react';

import { characterType } from 'src/shared/types';
import { getData } from 'src/shared/utils';

const useLoadCharacter = (id: string) => {
  const [character, setCharacter] = useState<characterType>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();

    const getCharacter = async () => {
      try {
        setIsLoading(true);

        const res = await getData({
          url: `/character/${id}`,
          signal: controller.signal,
        });

        setCharacter(res);
      } catch (err) {
        if (err.status == 404) setIsNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    getCharacter();

    return () => controller.abort();
  }, [id]);

  return {
    character,
    isLoading,
    isNotFound,
  };
};

export default useLoadCharacter;
