/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const mysql=require('mysql2')
const cors=require('cors')
// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
const dotenv=require('dotenv')
dotenv.config();
// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});
app.use(cors())

const db = mysql.createConnection({
  host:'chickfila.ckjtg3n8r0ue.us-east-1.rds.amazonaws.com' || 'localhost',
  user:'admin',
  password:process.env.PASSWORD,
  database:process.env.DB,
  port:process.env.PORT,
})

db.connect((err)=>{
  if(err) throw err
  console.log('connect to db'+ db.state)
})

app.get('/menu',(req,res)=>{
  const query='SELECT * FROM menu_items WHERE cat_id=1'
  db.query(query,(err,result)=>{
    if(err) throw err
    else res.send(result) && console.log(result)
  })
})
app.get('/menu/breakfast',(req,res)=>{
  const query='SELECT * FROM menu_items WHERE cat_id=2'
  db.query(query,(err,result)=>{
    if(err) throw err
    else res.send(result) && console.log(result)
  })
})
app.get('/menu/salads',(req,res)=>{
  const query='SELECT * FROM menu_items WHERE cat_id=3'
  db.query(query,(err,result)=>{
    if(err) throw err
    else res.send(result) && console.log(result)
  })
})
app.get('/menu/drinks',(req,res)=>{
  const query='SELECT * FROM menu_items WHERE cat_id=4'
  db.query(query,(err,result)=>{
    if(err) throw err
    else res.send(result) && console.log(result)
  })
})


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
