const isProduction = process.env.NODE_ENV === 'production';
const hostUrl = 'http://wwwlab.cs.univie.ac.at'; 
const basePath = '/~gyarmatip41/app-store-clone-app';

module.exports = {
    env: {
        API_BASE_URL: process.env.API_BASE_URL
    },
    assetPrefix: isProduction ? `${hostUrl}${basePath}` : '',
    basePath: isProduction ? basePath : ''
};
