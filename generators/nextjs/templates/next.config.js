const withTypescript = require('@zeit/next-typescript')
module.exports = Object.assign(
    {
        exportPathMap: async function (defaultPathMap) {
            return {
                '/': { page: '/' }
            };
        }
    },
    withTypescript()
);
