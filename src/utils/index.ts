import {AxiosResponse} from 'axios';
import {api} from '../api';

export const useApiPost = async <T, K>({
  data,
  url,
}: {
  url: string;
  data: K;
}): Promise<AxiosResponse<T>> => {
  return await api.post(url, data);
};
