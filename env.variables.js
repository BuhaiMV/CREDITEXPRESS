export const getEnvironmentVariablesForServer = (server = 'DEV') => {
    switch (server) {
        case 'DEV':
            return {
                domain: 'https://bold-sun-8337.fly.dev',
            };
        default:
            throw new Error('Invalid SERVER environment variable is passed to the test script');
    }
};

export const serverEnvironmentVariables = getEnvironmentVariablesForServer(process.env.SERVER);
