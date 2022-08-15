module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0388f2410edc007777c22c6ea4508374'),
  },
});
