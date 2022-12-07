import express from 'express'; // Fast, unopinionated, minimalist web framework for Node.js.
import mongoose from 'mongoose'; // elegant mongodb object modeling for node.js
import dotenv from 'dotenv'; // Dotenv is a zero-dependency module that loads environment variables from a .env
import cors from 'cors'; // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
import morgan from 'morgan' // HTTP request logger middleware for node.js
import routeUrl from './Router/signup_user_router.js'

const app = express()

// dotenv configure
dotenv.config({ path: './Config/config.env' })
let port = process.env.PORT
let mongoDb_url = process.env.MONGO_DB_URL_LOCAL

app.use(cors())
app.use(morgan("tiny"))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Meeco</h1>')
})

app.use('/signup', routeUrl)

mongoose.connect(mongoDb_url)
    .then((res) => {
        console.log("mongoDB connected successfully");
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})