import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    degree : String,
    college : String,
    branch : String,
    semester : Number,
    points : {
        type : Number,
        default : 50
    },
    profileImg : {
        type : String,
        default : '',
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const userModel = mongoose.model('User', userSchema);
export default userModel