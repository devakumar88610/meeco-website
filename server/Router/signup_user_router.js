import express from 'express'
import signupUserTem from '../Model/signup_user.js'

const router = express.Router();

// URL:http://localhost:8080/signup/createuser

router.post("/createuser", async (req, res) => {
    try {
        let signupUser = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            message: req.body.message
        }
        let user = await signupUserTem(signupUser)
        console.log(user)
        user = await user.save()
        res.status(200).json({
            msg: "user created succesfully",
        });
    }
    catch (err) {
        console.log(err);
    }
});

export default router;