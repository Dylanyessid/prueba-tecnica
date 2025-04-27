import { Dialect } from "sequelize";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import UserModel from "../models/User";
import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelizeConnection = new Sequelize( {
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    dialect:DB_DIALECT as Dialect,
    port: DB_PORT,
    models:[path.join(__dirname, "../models")],
});


const dbInit = async () =>{
    try {
        
        await sequelizeConnection.sync({force:false});
        console.log("Database connection established successfully.");
    } catch (error) {
        console.log("Error connecting to the database");
    }
}
export default dbInit;