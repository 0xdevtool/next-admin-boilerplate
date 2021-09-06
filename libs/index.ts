import httpClient from './HttpClient';
import safeHttpClient from './SafeHttpClient';

export const jsonFetcher = (url: string) => httpClient.get(url);

export const safeJsonFetcher = (url: string) => safeHttpClient.get(url);
