import { Dialect, Sequelize } from "sequelize";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import UserModel from "../models/User";

const sequelizeConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:DB_DIALECT as Dialect,
    port: DB_PORT,
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