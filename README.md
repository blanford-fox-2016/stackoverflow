# Stackoverflow


## Technology Used

- Nodejs
- Express
- Mongodb
- Mongoose
- Passport
- Bootstrap
- Express Session

## Model

### User
```js
User = {
  user_id : {
    type : Number,
    unique : true
  }
  username : {
    type : String,
    unique : true,
    required : true
  },
  name : {
    type: String,
    required : true
  },
  email : {
    type: String,
    validate : {
      isEmail: true,
    }
    required : true
  },
  password : {
    type : String,
    required : true
  }
}
```

### Question
```js
Question = {
  question_id : {
    type : Number, required : true, unique: true
  },
  author : {
    type: Schema.Types.ObjectId, ref : 'User', required: true
  },
  title : {
    type : String, required : true
  },  
  content : {
    type : String, required: true
  },
  comments : [{
    comment: { type :String, required : true},
    comment_id : { type: Number, required : true, unique: true},
    commentator : { type : Schema.Types.ObjectId, ref : 'User'}
  }],
  votes : [{
    type : Schema.Types.ObjectId, ref : 'User', unique : true
  }]
}
```


## API Routes

#### User

| Method   |            Routes       |      Description   |
|----------|:-----------------------:|-------------------:|
| GET      |  /api/users             | get all users      |
| POST     |  /api/users             | post single user   |
| PUT      |  /api/users/:username   | edit single user   |
| DELETE   |  /api/users/:username   | delete single user |
| GET      |  /api/users/:username   | find single user   |

#### Question

| Method   |              question_id Routes          |       Description      |
|----------|:-----------------------------:|-----------------------:|
| GET      |  /api/questions               | get all questions      |
| POST     |  /api/questions               | post single question   |
| PUT      |  /api/questions/:question_id  | edit single question   |
| DELETE   |  /api/questions/:question_id  | delete single question |
| GET      |  /api/questions/:question_id  | find single question   |

#### Comment

| Method   |                         Routes                         |       Description     |
|----------|:------------------------------------------------------:|----------------------:|
| GET      |  /api/questions/:question_id/comments                  | get all comments      |
| POST     |  /api/questions/:question_id/comments                  | post single comment   |
| PUT      |  /api/questions/:question_id/comments/:comment_id      | edit single comment   |
| DELETE   |  /api/questions/:question_id/comments/:comment_id      | delete single comment |
| GET      |  /api/questions/:question_id/comments/:comment_id      | find single comment   |


#### Vote

|  Method   |                    question_idRoutes              |       Description     |
|-----------|:--------------------------------------:|----------------------:|
| POST      |  /api/questions/:question_id/votes     | post the vote         |
| DELETE    |  /api/questions/:question_id/votes     | delete the vote       |

## Copyright
