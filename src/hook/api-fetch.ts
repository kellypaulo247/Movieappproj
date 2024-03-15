import {AxiosResponse} from 'axios';

import {api} from '../api';

export const useApiFetch = async <T>(
  url: string,
): Promise<AxiosResponse<T>> => {
  return await api.get<T>(url);
};
