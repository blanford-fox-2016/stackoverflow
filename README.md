# stackoverflow
Develop mini QA App using node.js & mongodb - mongoose

## Dependencies
1. passport
2. passport-local
3. passport-local-mongoose
4. dotenv
5. mongodb
6. mongoose
7. nodemon
8. express framework
9. express-session
10. mocha
11. chai

## Testing
### Integration
`npm run test`

## Database Configuration

### Model's Schema
#### Users
```
let UserSchema = {
  username : {
    type      : String,
    requires  : true
  },
  password : {
    type      : String,
    requires  : true,
    lowercase : true,
    trim      : true
  }
}
```

#### Questions
```
let QuestionSchema = {
  questionId  : Number,
  content     : {
    type      : String,
    requires  : true
  },
  author: {
    type  : Schema.Types.ObjectId,
    ref   : 'Users'
  },
  comment : [{
      commentId: Number,
      content : {
        type      : String,
        requires  : true
      },
      author: {
        type  : Schema.Types.ObjectId,
        ref   : 'Users'
      }
  }],
  votes : [{
    type  : Schema.Types.ObjectId,
    ref   : 'Users'
    }]
}
```

### Expected Model's Result
#### Users
```
{
  username  : "admin",
  password  : "admin"
}
```
#### Questions
```
{
  questionId  : 1,
  content     : "Why you choose node.js rather than PHP?",
  author      : "admin",
  comment     : [{
      commentId : 1,
      content   : "It's asynchronous",
      author: 1
  }],
  votes   : [1, 2]
}
```

## End Point Routes RESTful API
Default development port and host : http://localhost:3000/
#### Users
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/users/login | POST | login user |
| /api/users | POST | process new user |
| /api/users/:id | PUT  | edit a user |
| /api/users/:id | DELETE | delete a user |
#### Questions
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/questions | POST | process new question |
| /api/questions/:questid | GET | process show a question & post's comment |
| /api/questions/:questid | PUT  | edit a question |
| /api/questions/:questid | DELETE | delete a question |
#### Comments
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/questions/:questid/comments/ | POST | process new comment |
| /api/questions/:questid/comments/:commentid | PUT  | edit a comment |
| /api/questions/:questid/comments/:commentid | DELETE | delete a comment |
#### Votes
| Routes | HTTP | Description |
|--------|------|-------------|
| /api/questions/:questid/comments/:commentid/votes/ | POST | add 1 vote |
| /api/questions/:questid/comments/:commentid/votes/ | DELETE | remove 1 vote |

## File Structure
```

```

## Package JSON

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
