const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var operation = req.body.operation;

    if (operation==='add'){
        var result = num1 + num2
    }
    else if (operation==='sub'){
        var result = num1 - num2;
    }
    else if (operation==='mul'){
        var result = num1 * num2;
    }
    else if (operation==='div'){
        if (num2 !== 0){
            var result = num1 / num2;
        }
        else{
            res.send("Cannod divide by Zero")
        }
    }
    else {
        res.send("Invalid Operation")
    }
    res.send("Result : " + result)

})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
});