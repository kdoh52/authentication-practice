const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

dotenv.config();

//set up server
const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());

//connect to mongoDB
const uri = process.env.MDB_CONNECT;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Established connection with MongoDB database.')
});

//set up routes
app.use('/auth', require("./routes/userRoutes"));
app.use('/customer', require("./routes/customerRoutes"));

