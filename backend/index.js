const express = require("express");
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

const rootRouter = require("./routes/index");

const app = express();

app.use("/api/v1", rootRouter);
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
})