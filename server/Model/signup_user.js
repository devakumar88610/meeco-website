import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,

    },
    mobile: {
        type: String,

    },
    message: {
        type: Date,
        default: Date.now
    }
});

let signupUserTem = mongoose.model('user', userSchema)
export default signupUserTem