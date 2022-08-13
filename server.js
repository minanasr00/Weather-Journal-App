// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const wCors = require("cors");
const wBodyParser = require("body-parser");
const wExpress = require("express"); 
const app = wExpress();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(wBodyParser.urlencoded({ extended: false }));
app.use(wBodyParser.json());
app.use(wCors());


// Initialize the main project folder
app.use(wExpress.json());
app.use(wExpress.static('website'));




// config Server
const listenon=()=>{
    console.log(`The Server is Run on port ${port}`);
}

const port =9000;
const server = app.listen(port,listenon);

//get
app.get('/getTheData', (req, res)=>{
    res.json(D)
})

//post
app.post('/putTheData', (req, res)=>{
    D = req.body
    res.json({msg : 'done'})
})



