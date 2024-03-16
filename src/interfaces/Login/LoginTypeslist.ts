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