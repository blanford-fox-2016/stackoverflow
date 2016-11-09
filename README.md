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
  quest_id : {
    type : Number,
    required : true,
    unique: true
  },
  author : {
    type: Schema.Types.ObjectId,
    ref : 'User'
  },
  title : {
    type : String,
    required : true
  },
  content : {
    type : String,
    required: true
  },
  comments : [{
    type: String,
    comment_id : Number,
    commentator : {
      type : Schema.Types.ObjectId,
      ref : 'User'
    }
  }],
  votes : [{
    type : Schema.Types.ObjectId,
    ref : 'User',
    unique : true
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

| Method   |            Routes          |       Description      |
|----------|:--------------------------:|-----------------------:|
| GET      |  /api/questions            | get all questions      |
| POST     |  /api/questions            | post single question   |
| PUT      |  /api/questions/:id        | edit single question   |
| DELETE   |  /api/questions/:id        | delete single question |
| GET      |  /api/questions/:id        | find single question   |

#### Comment

| Method   |                Routes                   |       Description     |
|----------|:---------------------------------------:|----------------------:|
| GET      |  /api/questions/:id/comments            | get all comments      |
| POST     |  /api/questions/:id/comments            | post single comment   |
| PUT      |  /api/questions/:id/comments/:c_id      | edit single comment   |
| DELETE   |  /api/questions/:id/comments/:c_id      | delete single comment |
| GET      |  /api/questions/:id/comments/:c_id      | find single comment   |


#### Vote

|  Method   |                Routes                   |       Description     |
|-----------|:---------------------------------------:|----------------------:|
| POST      |  /api/questions/questions/:id/votes     | post the vote         |
| DELETE    |  /api/questions/questions/:id/votes     | delete the vote       |

## Copyright
