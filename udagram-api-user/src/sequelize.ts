import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { config } from "./config/config";

const dialet: Dialect = config.dialect as any;

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: dialet,
  storage: ":memory:",
});
