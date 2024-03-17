export interface CreateTokenResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface LoginSessionRequest {
  username: string;
  password: string;
  request_token: string;
}

export interface LoginSessionResponse {
  success: boolean;
  expires_at: string;
  request_token: string;
}

export interface CreateSessionRequest {
  request_token: string;
}

export interface CreateSessionResponse {
  success: boolean;
  session_id: string;
}

interface Gravatar {
  hash: string;
}

interface Tmdb {
  avatar_path?: any;
}

interface Avatar {
  gravatar: Gravatar;
  tmdb: Tmdb;
}

export interface User {
  avatar: Avatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}
