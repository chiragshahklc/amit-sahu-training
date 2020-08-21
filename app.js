import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"])
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.append("Access-Control-Allow-Headers", "Content-Type")
    next()
})

app.get("/", (req, res) => {
    res.send("Hello World")
})

import employeeRoutes from "./app/routes/employee.routes"
app.use(employeeRoutes)

const port = process.env.port || 8080

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
