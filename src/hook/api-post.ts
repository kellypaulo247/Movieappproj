import { AxiosResponse } from 'axios';
import { api } from '../api';

export const useApiPost = async <T>(
  url: string,
  data: K 
): Promise<AxiosResponse<T>> => {
  return await api.post<T>(url, data);
};