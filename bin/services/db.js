"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const config = {
    host: process.env.DB_SERVER,
    port: parseInt(process.env.DB_PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
async function query(sql, params) {
    const connection = await promise_1.default.createConnection(config);
    const queryResults = await connection.execute(sql, params);
    return queryResults;
}
module.exports = {
    query,
};
