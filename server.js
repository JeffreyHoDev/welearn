const bcrypt = require('bcrypt');
const saltRounds = 10;
const express = require('express');
let app = express();
const cors = require('cors');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
var db = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Reunion94!',
      database : 'welearn'
    }
  });

  db.select('*').from('users')
  .then(data => {
      console.log(data);
  });

app.use(express.json());
app.use(cors())

app.post('/signin', (req,res) => {
    const {username, password, email} = req.body;
    db('users').where('email', "=", email)
    .then(data => {
      bcrypt.hash(password, saltRounds, function(err, hash) {
        const isValid = bcrypt.compare(hash, data[0].password)
        if(isValid){
          db('users')
          .where('email', "=", email)
          .then(user => {
            res.json(user)
          })
          .catch(err => res.status(400).json("Failed getting user"))
        }
        else {
          res.status(400).json("Wrong Credentials 1")
        }
      })
    })
    .catch(err => res.status(400).json("Wrong Credentials"))

})

app.post('/register', (req,res) => {
  const {username, password, email} = req.body;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    db('users').insert({username: username, email: email, password: hash}).returning('*')
    .then(data => res.json(data))
  })
})



app.listen(3001, ()=> {
    console.log(`App is running on port 3001 `);
})