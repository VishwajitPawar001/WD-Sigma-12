const figlet = require("figlet");

figlet("Vishwajit", function (err, data) {
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
})