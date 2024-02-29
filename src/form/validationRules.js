const validationRules = {
    email: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Invalid email address',
    },
    number: {
        value: /^\d+$/,
        message: 'Only numbers are allowed',
    },
    phone: {
        value: /^[0-9]{10}$/,
        message: 'Invalid phone number (10 digits required)',
    },

    password: {
        value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'Password does not meet the criteria',
    },
};

export default validationRules;