module.exports = ({ env }) => ({
defaultConnection: 'default',
connections: {
    default: {
    connector: 'mongoose',
    settings: {
        host: env('DATABASE_HOST', 'cluster0.thbpw.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'Cluster0'),
        username: env('DATABASE_USERNAME', 'Spnl48'),
        password: env('DATABASE_PASSWORD', 'Suleiman22azi@'),
    },
    options: {
    authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
    ssl: env.bool('DATABASE_SSL', true),
    },
},
},
});
