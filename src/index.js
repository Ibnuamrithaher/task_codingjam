const fs = require("fs")
const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routers/user_router')
const productRouter = require('./routers/product_router')

const app = express()

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json())

app.use(userRouter)
app.use(productRouter)

app.listen(8000)