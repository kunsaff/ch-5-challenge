import { Router, json } from "express";
import data from "./static/akun.json" assert {type: "json"};
const routes = Router();

routes.use(json());

//authorization di header
routes.use((req, res, next) => { 
    if (req.headers.authorization === "qwerty98765") {
        return next();
    }

    return res.status(401).json({
        message: "Belum Log in"
    });
});

routes.get("/data", (req, res) =>{
    return res.status(200).json(data);
});

routes.get('/data/:id', (req, res) => {
    const {id} = req.params; 
    const result = data.data.find((d) => d.id === +id);
    return res.status(200).json({
        result: result
    });
});

routes.post("/data", (req, res) => {
    const { username, password } = req.body;
    console.log({
        username_be: username,
        password_be: password
    });

    //coba validasi (belum berhasil)
    if (username == data.data.username) {
        console.log("beda")
    } else {
        console.log("sama")
    };

    return res.status(200).json({
        message: "success"
    })
});

export default routes;