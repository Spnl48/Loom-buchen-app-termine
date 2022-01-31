module.exports = ({ env }) => ({
host: env('HOST', '0.0.0.0'),
port: env.int('PORT', 1337),
admin: {
auth: {
    secret: env('ADMIN_JWT_SECRET', '1fd66dc804135b03fe06bca1d30636d9'),
},
},
});
