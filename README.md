# stackoverflow


# Development

```
npm install
npm start
```

# User's models

```
let accountSchema = new Schema ({
  accountId : {type : Number, unique:true},
  firstname : String,
  username : {type:String,unique:true},
  email : {type:String,unique:true},
  password : String
})
```

# Question's models

```
let questionSchema = new Schema ({
  questionId : {type : Number, unique:true},
  userId : { type: Schema.Types.ObjectId, ref: 'Account' },
  question : String,
  title : {type:String, min: 5, max: 20},
  answers : [
  {
    type: Schema.Types.ObjectId,
    ref: 'Account'
   }
     ],
  votes : [
  {
    type: Schema.Types.ObjectId,
     ref: 'Account'
     }
     ]
})
```

# API


url = " http://localhost://3000"

| Endpoint               | HTTP   | Description
|------------------------|--------|------------
| api/question           | GET    | Show all question
| api/question           | POST   | Create new question
| api/question/:id       | PUT    | Update question by id
| api/question/:id       | DELETE | Delete question by id
| api/question/:question | GET    | Find question by question statement


# USER


| Endpoint              | HTTP   | Description
|-----------------------|--------|------------
| api/user              | GET    | Show all user
| api/user/login        | POST   | User login
| api/user/register          | POST   | Create new user
| api/user/:id          | PUT    | Update user by id
| api/user/:id          | DELETE | Delete user by id

#
