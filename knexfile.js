require("dotenv").config();
const { DB_HOST, PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      port: PORT,
      database: DB_NAME,
      user: DB_USER,
      password: DB_PASSWORD,
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
