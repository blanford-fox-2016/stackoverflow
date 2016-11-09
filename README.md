# Stack Overflow

## Basic Dependencies Configuration

### Install & Initialize express

Go to your repository project and then :
```
npm install express-generator -g
express .
```
This process will generate your default express skeleton including `package.json`.
And then run `npm install` to finish installing your `node_modules`

## Extra Dependencies Configuration
Install more dependencies for database, routing, authentication process and testing
```sh
npm install -S mongodb mongoose mongoose-increment dotenv cors passport passport-local passport-local-mongoose express-session
chai chai-http


npm install  
```

## Model Schema

### Question

```js
const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answer: [
        {
            type: Schema.Types.ObjectId,
            ref: 'answer'
        }
    ],
    votes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, {
  timestamps: true
});

```

### Answer

```js
const answerSchema = new mongoose.Schema({
    questionId: {
      type: String,
      required: true
    },
    answer_title : {
      type: String,
      required: true
    },
    answer_content: {
      type: String,
      required: true
    }
}, {
  timestamps: true
});
```

### User

```js
const User = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(email){
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
            },
            message: ''Wrong email format
        }
    },
    question: [
        {
            type: Schema.Types.ObjectId,
            ref: 'question'
        }
    ],
    answer: [
        {
            type: Schema.Types.ObjectId,
            ref: 'answer'
        }
    ]
}, {
  timestamps: true
})
```

## Routing

### API User

| Endpoint              | HTTP      | Description               |
| ----------            | -----     | ------------              |
| api/register          | POST      | Register User             |
| api/login             | POST      | Login User                |
| api/user/seed         | GET       | Create Dummy User Data    |
| api/user              | GET       | Get All User              |
| api/user/:user_id     | GET       | Get Single User           |
| api/user              | DELETE    | Delete All User           |
| api/user/:user_id     | DELETE    | Delete User By user id    |
| api/user/:user_id     | PUT       | Update User By user id    |

### API Question

| Endpoint                    | HTTP      | Description                       |
| ----------                  | -----     | ------------                      |
| api/question/seed           | GET       | Create Dummy Question Data        |
| api/question                | GET       | Get All Questions                 |
| api/question                | POST      | Create New Question               |
| api/question                | DELETE    | Delete All Question               |
| api/question/:question_id   | DELETE    | Delete Question By question id    |
| api/question/:question_id   | PUT       | Update Question By question id    |

### API Answer

| Endpoint                 | HTTP      | Description                 |
| ----------               | -----     | ------------                |
| api/answer/seed          | GET       | Create Dummy Answer Data    |
| api/answer               | GET       | Get All Answer              |
| api/answer               | POST      | Create new Answer           |
| api/answer               | DELETE    | Delete All Answer           |
| api/answer/:answer_id    | DELETE    | Delete Answer By answer id  |
| api/answer/:answer_id    | PUT       | Update Answer By answer id  |
