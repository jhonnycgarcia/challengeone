/**
 * NODE_ENV must be ['development','production','test']
 */
const format = require('./default.json');
const env = process.env.NODE_ENV || "development";
// TODO: use convict to handler environments


const configServer = {
    development: {
        api: {
            port: process.env.DEV_SERVER_PORT || 3000
        },
        db: {
            host: process.env.DEV_DB_HOST || "",
            port: process.env.DEV_DB_PORT || "",
            dbname: process.env.DEV_DB_DBNAME || "",
            username: process.env.DEV_DB_USERNAME || "",
            password: process.env.DEV_DB_PASSWROD || ""
        },
        DEBUG: "challengeone:*",
        cookieSecret: process.env.DEV_COOKIE_SECRET || ""
    },
    production: {
        api: {
            port: process.env.PROD_SERVER_PORT || 3000
        },
        db: {
            host: process.env.PROD_DB_HOST || "",
            port: process.env.PROD_DB_PORT || "",
            dbname: process.env.PROD_DB_DBNAME || "",
            username: process.env.PROD_DB_USERNAME || "",
            password: process.env.PROD_DB_PASSWROD || ""
        },
        DEBUG: "challengeone:*",
        cookieSecret: process.env.PROD_COOKIE_SECRET || ""
    },
    test: {
        api: {
            port: process.env.TEST_SERVER_PORT || 3000
        },
        db: {
            host: process.env.TEST_DB_HOST || "",
            port: process.env.TEST_DB_PORT || "",
            dbname: process.env.TEST_DB_DBNAME || "",
            username: process.env.TEST_DB_USERNAME || "",
            password: process.env.TEST_DB_PASSWROD || ""
        },
        DEBUG: "challengeone:*",
        cookieSecret: process.env.TEST_COOKIE_SECRET || ""
    }
};

module.exports = configServer[env];