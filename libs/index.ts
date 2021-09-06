import httpClient from './HttpClient';
import safeHttpClient from './SafeHttpClient';

export const jsonFetcher = (url: string) => httpClient.get(url).then((res) => res.data);

export const safeJsonFetcher = (url: string) => safeHttpClient.get(url).then((res) => res.data);
