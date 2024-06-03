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
