const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0.2cn8j8o.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model("User", userSchema)

const accountSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    balance: {
        type: Number,
        require: true
    }
});

const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User, Account
};