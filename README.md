# Stack Overflow

## Install
```
1. express
2. mongodb
3. mongoose
4.
```

## API

### Users

| Endpoint           | HTTP | Description |
|:-------------------|:----:|:------------|
| api/users          | GET  | get all data user
| api/users/:id      | GET  | get all data user
| api/users/register | POST | create new user account
| api/users/update   | PUT  | update data user
| api/users/delete   | DEL  | delete data user

### Questions & comments

|No.| Endpoint           | HTTP | Description |
|:--|:-------------------|:----:|:------------|
|1.| api/questions                             | GET  | get all data questions
|2.| api/questions/:q_id                       | GET  | get one data questions
|3.| api/questions/create                      | POST | create new questions
|4.| api/questions/update/:q_id                | PUT  | update data questions
|5.| api/questions/delete/:q_id                | DEL  | delete data questions
|6.| api/questions/q_id/comments               | GET  | get all data comments for one questions
|7.| api/questions/q_id/comments/:c_id         | GET  | get one data comments for one questions
|8.| api/questions/q_id/comments               | POST | create new comments for one questions
|9.| api/questions/q_id/update/comments/:c_id  | PUT  | update data comments
|10.| api/questions/q_id/delete/comments/:c_id | DEL  | delete data comments form questions

### Route Registration

```
var users = require('../routes/users');
var questions = require('../routes/questions');

app.use('/api/users', users);
app.use('/api/questions', questions);
```

### Route questions
```
// users
routes.get('/', controller.questions)
routes.get('/:q_id', controller.questions)
routes.post('/create', controller.questions)
routes.put('/update/:q_id', controller.questions)
routes.delete('/delete/:q_id ', controller.questions)

// questions
routes.get('/q_id/comments', controller.questions)
routes.get('/q_id/comments/:c_id ', controller.questions)
routes.post('/q_id/comments', controller.questions)
routes.put('/q_id/update/comments/:c_id', controller.questions)
routes.delete('/q_id/comment/:c_id', controller.questions)

// comments
routes.get('/q_id/comments', controller.questions)
routes.get('/q_id/comments/:c_id ', controller.questions)
routes.post('/q_id/comments', controller.questions)
routes.put('/q_id/update/:c_id', controller.questions)
routes.delete('/q_id/comment/:c_id', controller.questions)

// Votes
routes.get('/q_id/comments', controller.questions)
routes.get('/q_id/comments/:c_id ', controller.questions)
routes.post('/q_id/comments', controller.questions)
routes.put('/q_id/update/:c_id', controller.questions)
routes.delete('/q_id/comment/:c_id', controller.questions)
```

## Schema models database

### Users
```
  var userSchema = mongoose.Schema({
      username : { type: String, unique: true },
      password : String
      address : String,
      email : String
  },{
    timestamps : true
  });
```

### Questions, Comments, and Votes
```
  var questionSchema = mongoose.Schema({
      title : String,
      content : String,
      asker : {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      comments:[{
        comment: String,
        commenter: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        }
      }],
      vote:[{
        type: Schema.Types.ObjectId,
        ref: 'users',
        unique: true
      }]
  },{
    timestamps : true
  });
```
