import express from 'express'
import signupUserTem from '../Model/signup_user.js'

const router = express.Router()

router.post("/signup", (req, res)=>{
    const signupUser = new signupUserTem({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
    })
    signupUser.save()
    .then((data)=>{
        response.json(data)
        console.log("save success");
    })
    .catch((err)=>{
        response.json(err)
        console.log('error');
    })
})

export default router;