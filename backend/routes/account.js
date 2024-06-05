const express = require("express");
const { User, Account } = require("../db");
const { authMiddleware } = require("../middleware");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", async(req,res) =>{
    const account = await Account.findOne({
        userId : req.userId
    });

    res.json({
        balance : account.balance
    })
})

router.post("/transfer", authMiddleware, async(req,res) =>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount , to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({userId: req.body.userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance in account"
        })
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.json({
            message: "Not a valid account"
        })
    }

    //Perform the transactions
    await Account.updateOne({userId : req.body.userId},{$inc: {balance: -amount}}).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount}}).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
})


module.exports = router;

