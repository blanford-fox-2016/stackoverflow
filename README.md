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
