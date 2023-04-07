const express = require('express');
const app = express();
const port = 3000;

let dbUsers = [
    {
        username: "ry",
        password: "123",
        name: "Lim Ru Ying",
        email: "123@gmail.com"
    },
    {
        username: "fatin",
        password: "456",
        name: "Fatin",
        email: "456@gmail.com"
    },
    {
        username: "ina",
        password: "789",
        name: "Adlina",
        email: "789@gmail.com"
    },
    {
        username: "mai",
        password: "012",
        name: "Maisarah",
        email: "012@gmail.com"
    }
]

app.use(express.json());

app.post('/login', (req, res) => {
  let data = req.body

  res.send(
    login(
      data.username,
      data.password
    )

  );
});

app.post('/register', (req, res) => {
  let data = req.body

  res.send(
    register(
      data.username,
      data.password,
      data.name,
      data.email
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})

function login (username, password){

  let matched = dbUsers.find(element => 
      //console.log(element) //print out every element in the array dbUsers
      element.username == username
  )
  if (matched){
      if (matched.password == password){
          return matched
      }
      else{
          return "Password not matched"
      }
  }
  else{
      return "Username not found"
  }
}

function register (newusername, newpassword, newname, newemail){
  let matched = dbUsers.find(element => 
      element.username == newusername
  )
  if (matched){
      return "Username already exist"
  }
  else{
      dbUsers.push({
          username: newusername,
          password: newpassword,
          name: newname,
          email: newemail
      }) //push new element to the array
  }

  return "success"
}