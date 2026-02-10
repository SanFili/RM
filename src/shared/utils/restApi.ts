import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from 'src/shared/constants';
import { characterFiltersType } from 'src/shared/types';

const api = axios.create({
  baseURL: BASE_URL,
});

interface getDataProps {
  url: string;
  params: characterFiltersType;
  signal: AbortSignal;
  errorMessage?: string;
}

export const getData = async ({
  url,
  params,
  signal,
  errorMessage,
}: getDataProps) => {
  return await api
    .get(url, {
      params,
      signal,
    })
    .then((res) => {
      if (!res.data || signal.aborted) {
        throw Error();
      }

      return res.data;
    })
    .catch((err) => {
      if (err.name !== 'CanceledError') {
        toast.error(errorMessage ?? err.response?.data?.error ?? err.message);
      }
      throw err;
    });
};
