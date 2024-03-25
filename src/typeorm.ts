import { DataSource } from "typeorm";
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;
console.log(DB_URL);
const connectDB = new DataSource({
    type: "postgres",
    url: DB_URL,
    logging: true,
    synchronize: true,
    entities: [__dirname + "/../src/entities/**/*.ts"],
    extra: {
        ssl: false
    }
});

connectDB.initialize().then(() => {
    console.log(`Data Source has been initalized`);
}).catch(err => {
    console.error(`Data Source initalization error`, err);
});

export default connectDB;