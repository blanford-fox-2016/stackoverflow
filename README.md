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
  quest_content : {
    type      : String,
    requires  : true
  },
  answer : [{
      answerId : Number,
      userId : Number,
      answer_content : {
        type      : String,
        requires  : true
      }
  }],
  votes : [{
      voteId : Number,
      userId : Number,
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
  questionId : 1,
  quest_content : "How are you today?",
  answer : {
    answerId : 1,
    userId    : 123213123123,
    answer_content : "I'm fine"
  },
  votes : [{
    voteId : 1,
    userId : 123213123123
  },{
    voteId : 1,
    userid : 100000
  }]
}
```

## End Point Routes RESTful API
Default development port and host : http://localhost:3000/
#### Users
| Routes | HTTP | Description |
|-       |-     |-            |
| /api/signup | POST | signup user |
| /api/login | POST | login user |
| /api/users | POST | process new user |
| /api/users/:id | PUT  | edit a user |
| /api/users/:id | DELETE | delete a user |
#### Questions
| Routes | HTTP | Description |
|-       |-     |-            |
| /api/questions | POST | process new question |
| /api/questions/:questid | GET | process show a question & post's comment |
| /api/questions/:questid | PUT  | edit a question |
| /api/questions/:questid | DELETE | delete a question |
#### Comments
| Routes | HTTP | Description |
|-       |-     |-            |
| /api/questions/:questid/comments/ | POST | process new comment |
| /api/questions/:questid/comments/:commentid | PUT  | edit a comment |
| /api/questions/:questid/comments/:commentid | DELETE | delete a comment |
#### Votes
| Routes | HTTP | Description |
|-       |-     |-            |
| /api/votes/:id | PUT | edit a vote |

## File Structure
```

```

## Package JSON

## Contributor
Ken Duigraha Putra &copy; 2016

## License
MIT
