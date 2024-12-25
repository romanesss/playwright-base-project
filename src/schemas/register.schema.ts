export const registerResponseSchema = {
    type: 'object',
    properties: {
        success: { type: 'boolean' },
        subscribed: { type: 'boolean' },
        token: { type: 'string' },
        user: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: { type: 'string' },
                role: {
                    type: 'string',
                    enum: ['ROLE MEMBER', 'ROLE ADMIN', 'ROLE GUEST']
                }
            },
            required: ['id', 'firstName', 'lastName', 'email', 'role']
        }
    },
    required: ['success', 'subscribed', 'token', 'user']
};
