//js general

import express from "express";
import views from './views/index.js';
import apis from './apis/index.js';

//import router from "../../router.js";

const port = 9999;
const app = express();

//setting view engine, pastikan udah instal ejs di IDE
app.set('view engine','ejs');

app.use("/", views);
app.use("/api/v1", apis);

//error handling middleware
app.get("*", (req, res) => {
    res.status(404).json({
        status: "Not Found",
    });
});

app.listen(port, () => {
    console.log(`server challenge ch 5 nyala di port ${port}`);
});