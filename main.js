const app = require("./server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(res=>{
    console.log("database connected");
    app.listen(process.env.PORT, ()=>{
        console.log("listening on port "+ process.env.PORT);
    })
}).catch(err=>{
    console.log(err);
    process.exit(1);
})