import httpClient from 'libs/HttpClient';

import { LoginRequest } from './models';

export function login(payload: LoginRequest) {
    return httpClient.post('login', payload);
}
