# Users Documentation

All the routes that we will see next are found under the path `/api/users`. And those with a (*) in the name require additional permissions

---

### GET `/` (*)

Returns the data of the logged in user. This route will return 401 if there is no user logged in. Otherwise, it will return a json with the following format

```json
{
  "_id": "unique",
  "name": "Joaquin",
  "lastname": "Decima",
  "age": 25,
  "avatar": "https://joaquindecima.gitlab.io/assets/img/myphoto.jpg",
  "email": "jdecima@teco.com.ar",
  "role": "user"
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

If OK is registered, it returns:

```json
{
  "_id": "unique"
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

If OK is registered, it returns:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVuaXF1ZSJ9.MqUfR3jOr9qI40G1CLmT4i51YHS_0iIIypTLR8BoBU8"
}
```

---