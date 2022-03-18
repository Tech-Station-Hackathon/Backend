# Events Documentation

All the routes that we will see next are found under the path `/api/suverys`. And those with a (*) in the name require additional permissions

---

### GET `/:eventID` (*)

Allows you to add an event. For this the user must be 'manager' and that is validated by the head:

```json
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U"
}
```

Returns a list with all suverys for eventID. 

```json
[
    {
    "name": "Joaquin",
    "lastname": "Decima",
    "email": "jdecima@teco.com.ar",
    "idEvent": "6233bea6c5be7e68620334bb",
    "feedback": "El mejor partido de la historia",
    "cmbSat": 10,
    "cmbRate": 10,
    "cmbRecomm": 10
    } 
]
```

---

### POST `/` (*)

A Head with a token is required, for example:

```json
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U"
}
```

body request

```json
{
  "name": "Joaquin",
  "lastname": "Decima",
  "email": "jdecima@teco.com.ar",
  "idEvent": "6233bea6c5be7e68620334bb",
  "feedback": "El mejor partido de la historia",
  "cmbSat": 10,
  "cmbRate": 10,
  "cmbRecomm": 10
}
```