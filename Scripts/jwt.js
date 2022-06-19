const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
    res.json({
        message: "NodeJS and JWT"
    });
});

app.post("/api/login", (req, res) => { //here we create the token when the user logs in
    const user = {
        id: 1,
        email: 'orne@gmail.com',
        password: 'pirulin'
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
        res.json({
            token //the actual token was created and the user is identified. The browser will storage the token
        });
    });
});

app.post("/api/posts", verifyToken, (req, res) => { //here the user will be able to access the desired route
    jwt.verify(req.token, 'secretkey', (error, authData) =>{
        if(error){
            res.sendStatus(403); //if we send it in postman it'll display "forbidden", so in headers write authorization and in value bearer + token
        } else {
            res.json({
                message: "POST was created",
                authData
            });
        }
    });
});


//in Postman: Authorization: Bearer +<token> to verify it
function verifyToken(req, res, next){ //excecuted when success
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){ //here we get access to see the bearer token
        const bearerToken = bearerHeader.split(" ")[1]; //split between spaces and get the token (1)
        req.token = bearerToken;
        next(); //excecuted when success
    }else{ //error
        res.sendStatus(403);
    }
}

app.listen(5501, function(){
    console.log("Node js app running...");
});