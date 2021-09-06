/* eslint-disable no-undef */
export interface Token {
    accessToken: string | null;
    uid: string | null;
    client: string | null;
}

export function getSavedToken(): any {
    const accessToken = localStorage.getItem('accessToken') || '';

    return { accessToken };
}

export function clearSavedToken() {
    localStorage.removeItem('accessToken');
}

export function saveTokens(accessToken?: string) {
    if (accessToken != null) {
        localStorage.setItem('accessToken', accessToken);
    }
}
