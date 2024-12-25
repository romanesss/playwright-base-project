export interface LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    };
}

export interface RegisterRequest {
    isSubscribed: boolean;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface RegisterResponse {
    success: boolean;
    subscribed: boolean;
    token: string;
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
    };
}
