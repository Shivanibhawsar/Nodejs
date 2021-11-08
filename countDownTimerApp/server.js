const express = require("express")
const app = express()



var currentDate = function (req, res, next) {
  req.currentDate = new Date();
  next()
}
    
  app.use(currentDate)

app.get("/getRemainingDays", (req,res) =>{
  const difference = +new Date("2022-01-01") - +new Date();
  const days = {Days: Math.floor(difference / (1000 * 60 * 60 * 24)), RequestTime: req.currentDate};
  res.json(days);
})

app.get("/getRemainingHours", (req,res) =>{
    const difference = +new Date("2022-01-01") - +new Date();
    const hours = {Hours: Math.floor((difference / (1000 * 60 * 60)) % 24)};
    res.json(hours);
})
  

app.listen(5000,() =>{
    console.log("server started at 5000")
});

