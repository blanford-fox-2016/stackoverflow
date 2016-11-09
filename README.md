# Stackoverflow


## Technology Used

- Nodejs
- Express
-



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

#### Comments

| Method   |                Routes                   |       Description     |
|----------|:---------------------------------------:|----------------------:|
| GET      |  /api/questions/:id/comments            | get all comments      |
| POST     |  /api/questions/:id/comments            | post single comment   |
| PUT      |  /api/questions/:id/comments/:c_id      | edit single comment   |
| DELETE   |  /api/questions/:id/comments/:c_id      | delete single comment |
| GET      |  /api/questions/:id/comments/:c_id      | find single comment   |
