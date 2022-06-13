import express, { Router } from "express";
import axios from "axios";

const routes = Router();

routes.use(express.urlencoded({extended: true}));

routes.use('/assets', express.static("./views/assets"));

//header authorization 
routes.get("/", async (req, res) => {
    const { page } = req.query;

    const hasil = await axios({
        url: "http://localhost:9999/api/v1/data",
        method: "GET",
        params: { page },
        headers: {
            authorization: "qwerty98765"
        }
    });
    
    return res.render("home", {
        items: hasil.data
    });
});

routes.get("/", (req, res) => {
    res.render("home")
});

routes.get("/login", (req, res) => {
    res.render("login")
});

routes.get("/gamesuit", (req, res) => {
    res.render("gamesuit")
});

//coba post username
routes.get("/login", async (req, res) => {
    return res.render("login", {
        onSubmit: () => {
            console.log("hello");
        },
    });
});

routes.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const data = axios({
        url: "http://localhost:9999/api/v1/data",
        method: "POST",
        data: {
            username,
            password
        },
        headers: {
            authorization: "qwerty98765"
        }
    });
    return res.status(302).redirect("/");    
});

export default routes;