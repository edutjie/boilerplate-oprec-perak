module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f326ff44b4e6b840961f0d86b1c7387'),
  },
});
