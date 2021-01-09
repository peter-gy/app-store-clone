const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    GREETING: process.env.GREETING,
  },
  assetPrefix: isProduction ? 'http://wwwlab.cs.univie.ac.at/~gyarmatip41/app-store-clone-app' : '',
};
