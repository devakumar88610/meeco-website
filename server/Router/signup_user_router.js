import express from 'express'
import signupUserTem from '../Model/signup_user.js'

const router = express.Router()

// URL:http://127.0.8.6:8080/signup/createuser

router.post("/createuser", async (req, res) => {
    try {
        let signupUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        let user = await signupUserTem.findOne({ email: signupUser.email })
        if (user) {
            return res.status(401).json({
                msg: "email is alredy exists"
            })
        }
        user = signupUserTem(signupUser)
        console.log(user)
        user = await user.save()
        res.status(200).json({
            msg: "created succesfully",
            user: user
        })
    }
    catch (err) {
        console.log(err);
    }
})

export default router;