export interface RootState {
    version: string;
    [key: string]: any;
}

export interface Params {
    [key: string]: any;
    [key: number]: any;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string;
    last_login: string;
    date_joined: string;
}

export interface AuthState {
    access_token: string | null;
    refresh_token: string | null;
    expires_in: string | null,
    accessLevel: any | null;
    permissions: [],
    error: boolean;
}

export interface AuthCredential {
    username: string;
    password: string;
    client_id: string,
    client_secret: string,
    grant_type: string
}