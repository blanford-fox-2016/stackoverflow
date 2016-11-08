# Stackoverflow

## Node Package Module Server

### Install express

```
npm install express-generator -g
express -e
npm install
```

### Install Mongodb and Mongoose

```
npm install mongodb --save
npm install mongoose --save
```

### Install Cors

```
npm install cors --save 
```

### Install express-session

```
npm install express-session --save
```

### Install passport, passport local, and passport local mongoose

```
npm install passport --save
npm install passport-local --save
npm install passport-local-mongoose --save
```

### Install dotenv

```
npm install dotenv --save
```

### Install mocha

```
npm install mocha -g
```

### Install chai and chai-http

```
npm install chai --save
npm install chai-http --save
```

## Models

### questions

```
const Question = new Schema({
    questionId: Number,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    upvote: Number,
    downvote: Number
})
```

### answers

```
const Answer = new Schema({
    answerId: Number,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    upvote: Number,
    downvote: Number
})
```

### users

```
const User = new Schema({
    userId: Number,
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
})
```

## Routing

### API User

| Endpoint                      | HTTP      | Description               |
| ----------                    | -----     | ------------              |
| api/register                  | POST      | Register User             |
| api/login                     | POST      | Login User                |
| api/user/seed                 | GET       | Create Dummy User Data    |
| api/user                      | GET       | Get All User              |
| api/user/delete               | DELETE    | Delete All User           |
| api/user/delete/:userId       | DELETE    | Delete User By userId     |
| api/user/put/:userId          | PUT       | Update User By userId     |

### API Question

| Endpoint                          | HTTP      | Description                       |
| ----------                        | -----     | ------------                      |
| api/question/seed                 | GET       | Create Dummy Question Data        |
| api/question                      | GET       | Get All Question                  |
| api/question/delete               | DELETE    | Delete All Question               |
| api/question/delete/:questionId   | DELETE    | Delete Question By questionId     |
| api/question/put/:questionId      | PUT       | Update Question By questionId     |

### API Answer

| Endpoint                        | HTTP      | Description                 |
| ----------                      | -----     | ------------                |
| api/answer/seed                 | GET       | Create Dummy Answer Data    |
| api/answer                      | GET       | Get All Answer              |
| api/answer/delete               | DELETE    | Delete All Answer           |
| api/answer/delete/:questionId   | DELETE    | Delete Answer By answerId   |
| api/answer/put/:questionId      | PUT       | Update Answer By answerId   |

## Client

### Install bower

```
npm install bower -g
bower init
```

### Make bowerrc

```
{
    "directory": "lib/"
}
```

### Install bootstrap

```
bower install bootstrap --save
```