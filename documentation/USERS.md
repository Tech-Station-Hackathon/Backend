# Users Documentation

All the routes that we will see next are found under the path `/api/users`. And those with a (*) in the name require additional permissions

---

### GET `/` (*)

A Head with a token is required, for example:

```json
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U"
}
```

Returns the data of the logged in user. This route will return 401 if there is no user logged in. Otherwise, it will return a json with the following format

```json
{
  "user": {
    "_id": "62338bc16d0176f18eb6a0d6",
    "name": "Joaquin",
    "lastname": "Decima",
    "age": 25,
    "avatar": "https://joaquindecima.gitlab.io/assets/img/myphoto.jpg",
    "email": "jdecima@teco.com.ar",
    "role": "user"
  }
}
```

---

### POST `/register`

Requires a Body with the following content

```json
{
  "name": "Joaquin",
  "lastname": "Decima",
  "age": 25,
  "avatar": "https://joaquindecima.gitlab.io/assets/img/myphoto.jpg",
  "email": "jdecima@teco.com.ar",
  "password": "TECO123"
}
```

---

### POST `/auth`

Requires a Body with the following content

```json
{
  "email": "jdecima@teco.com.ar",
  "password": "TECO123"
}
```

If OK is auth, it returns:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U",
  "id": "62338bc16d0176f18eb6a0d6"
}
```

---