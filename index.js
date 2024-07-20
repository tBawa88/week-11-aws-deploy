import express from "express";
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, Welcome to my first aws EC-2 deployment")
})

app.get("/user/:id", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Welcome user ${req.params.id}`
    })
})

app.post("/secret", (req, res, next) => {
    const key = req.body.secret
    if (key === 'nike')
        return res.status(200).json({
            success: true,
            message: 'Welcome to the secret club'
        })
    else
        return res.status(401).json({
            success: false,
            message: 'Invalid secret key'
        })
})




const PORT = 8080
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))