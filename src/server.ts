import { App } from "./app";
import { Database } from "./database";

const port = 3000;

// db connection
const mongoose = new Database();

mongoose.dbConnection();

const app = new App(port)

app.listen();
