require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
require('./config/dbConnection')


app.use(cors());

// error handling

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error';
    res.status(err.statusCode.json({
        message: err.message,

    }));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
