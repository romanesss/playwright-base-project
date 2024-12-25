export const loginResponseSchema = {
    type: 'object',
    properties: {
        success: { type: 'boolean' },
        token: { type: 'string' },
        user: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: { type: 'string' },
                role: { type: 'string' }
            },
            required: ['id', 'firstName', 'lastName', 'email', 'role']
        }
    },
    required: ['success', 'token', 'user']
};
