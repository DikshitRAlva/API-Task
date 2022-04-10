import { default as mongoose } from "mongoose";

export class Database {
    dbConnection() {
        // secret: 'ittab*234!',
        mongoose.connect('mongodb+srv://Alva:Alva@cluster0.twbgy.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if (!err) {
                console.log("MongoDB connection successful");
            } else {
                console.log(
                    "Error in DB connection : " +
                        JSON.stringify(err, undefined, 2)
                );
            }
        });
        // console.log("Connection successful");
    }
}

