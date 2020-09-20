const express = require('express')

const app = express();
const bodyParser =require('body-parser')

const mongoose = require('mongoose')
require('./Employee')

app.use(bodyParser.json())

const Employee = mongoose.model("employee")
const mongoUri ="mongodb+srv://cool:azpPYLEF5tDWrVb3@cluster0-fa1ab.mongodb.net/test?retryWrites=true&w=majority"
//password =azpPYLEF5tDWrVb3
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",(err)=>{
    console.log("connected to mongo")
})

mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})

//for fetch  all the data 
app.get('/',(req,res)=>{Employee.find({})
   .then(data=>{
       res.send(data)
   })
   .catch(err =>{
    console.log(err)
})

})
// for post the data to the database
app.post('/send-data',(req,res)=>{
     // console.log(req.body)
     const employee = new Employee({

         name:req.body.name,
         email:req.body.email,
         phone:req.body.phone,
         picture:req.body.picture,
         salary:req.body.salary,
         position:req.body.position 
     })
        employee.save()
        .then(data=>{ 
            //console.log(data)
            res.send(data)
        }) .catch(err =>{
            console.log(err)
        })
     
})

// delete the data from the database
  
app.post('/delete', (req,res)=>{
     Employee.findByIdAndRemove(req.body.id)
     .then(data => {
        // console.log(data)
         res.send(data)
     })
     .catch(err =>{
        console.log(err)
    })
})

// for update the data from the app 

  app.post('/update',(req,res)=>{
        
     Employee.findByIdAndUpdate(req.body.id ,{
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        picture:req.body.picture,
        salary:req.body.salary,
        position:req.body.position 
     })
          .then(data => {
              //console.log(data)
              res.send(data)
          })
          .catch(err =>{
            console.log(err)
        })
  })

app.listen(3000,()=>{
    console.log("server running")
})
