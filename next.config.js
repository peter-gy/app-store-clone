const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  assetPrefix: isProduction ? 'http://wwwlab.cs.univie.ac.at/~gyarmatip41/app-store-clone-app' : '',
  images: {
    domains: [
      'is1-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is5-ssl.mzstatic.com',
      'is6-ssl.mzstatic.com',
    ],
  },
};
