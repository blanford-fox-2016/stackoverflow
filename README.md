# TanyaSaja - Simple QA WebApps

TanyaSaja is a simple QA WebApps, it's similar to StackExchange site but simpler, and you are free to ask anything. But still, you have to keep your attitude everytime you ask a question or give an answer.

## Database Models

Generally, there are two models in this apps, first is `Users`, and the second one is `Questions`.

Here are the models structure :

### Users

  ```
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    photo: {
      type: String
    },
    timestamps: true
  }
  ```
### Questions
  ```
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    answers: [
      {
        title: {
          type: String,
          required: true
        },
        content: {
          type: String,
          required: true
        },
        author:{
          type: Schema.Types.ObjectId,
          ref: 'Users'
        }
        timestamps: true
      }
    ],
    up: [
      {
        type: Schema.Types.ObjectId, ref: 'Users'
      }
    ],
    down: [
      {
        type: Schema.Types.ObjectId, ref: 'Users'
      }
    ],
    author: {
      type: Schema.Types.ObjectId, ref: 'Users'
    }
  }
  ```
## API Routes
Default host and port : `http://localhost:3000`
| Routes | Method | Action |
|--------|--------|--------|
| **Users** |||
| /api/auth/login | POST | Login user with username and password |
| /api/auth/register | POST | New user registration |
| /api/user | GET | Get list of all users |
| /api/user | POST | Post new user |
| /api/user/:id  | GET | Get detail of single user based on id |
| /api/user/:id | PUT | Edit single user's data  based on id |
| /api/user/:id | DELETE | Delete single user's data  based on id |
| **Questions**|||
| /api/question | GET | Get list of all questions |
| /api/question | POST | Post new question |
| /api/question/:id  | GET | Get detail of single question based on id |
| /api/question/:id | PUT | Edit single question's data  based on id |
| /api/question/:id | DELETE | Delete single question's data  based on id |
| **Answers** |||
| /api/question/:id/answer | GET | Get list of all answers of a question |
| /api/question/:id/answer | POST | Post new answer for a question:id/answer |
| /api/question/:id/answer/:id  | GET | Get detail of single answer based on id |
| /api/question/:id/answer/:id | PUT | Edit single answer's data  based on id |
| /api/question/:id/answer/:id | DELETE | Delete single answer's data  based on id |

## License
## Contributors
