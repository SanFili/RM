import axios from 'axios';
import toast from 'react-hot-toast';

import { BASE_URL } from 'src/shared/constants/urls';

const api = axios.create({
  baseURL: BASE_URL,
});

interface getDataProps {
  url: string;
  errorMessage?: string;
}

export const getData = async ({ url, errorMessage }: getDataProps) => {
  return await api
    .get(url)
    .then((res) => {
      if (!res.data) {
        throw Error();
      }

      return res.data;
    })
    .catch((err) => {
      toast.error(errorMessage ?? err.message);
      return err;
    });
};
