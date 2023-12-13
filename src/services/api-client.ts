import axios from 'axios';
export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '23e2e113c8e34c1f8b9d51d01b9dd240',
  },
});
