const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        API_BASE_URL: process.env.API_BASE_URL
    },
    assetPrefix: isProduction
        ? 'http://wwwlab.cs.univie.ac.at/~gyarmatip41/app-store-clone-app'
        : ''
};
