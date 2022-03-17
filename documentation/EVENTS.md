# Events Documentation

All the routes that we will see next are found under the path `/api/events`. And those with a (*) in the name require additional permissions

---

### GET `/`

Returns a list with all events

```json
[
    {
        "_id": "6233bc9e2f312cb9eb36fe0d",
        "title": "Victoria del Equipo 4",
        "description": "La entrega de los alucinantes premios para el Equipo 4 el ganador del Hackathon",
        "stream": "",
        "date": "",
        "isOnline": true,
        "isPresential": false
    },
    {
        "_id": "6233bea6c5be7e68620334bb",
        "title": "Quilmes Campion",
        "description": "El equipo mas importante del mundo mundial campion de la primera nacional",
        "stream": "",
        "date": "",
        "isOnline": true,
        "isPresential": true
    },
    {
        "_id": "6233bef0c5be7e68620334bc",
        "title": "Entrega de medallas de los iluminatis",
        "description": "Solo para el mundo de los mejores electos del mundo",
        "stream": "",
        "date": "",
        "isOnline": false,
        "isPresential": true
    }
]
```

---

### GET `/presentials`

Returns a list with all presentials events

```json
[
  {
    "_id": "6233bea6c5be7e68620334bb",
    "title": "Quilmes Campion",
    "description": "El equipo mas importante del mundo mundial campion de la primera nacional",
    "stream": "",
    "date": "",
    "isOnline": true,
    "isPresential": true
  },
  {
    "_id": "6233bef0c5be7e68620334bc",
    "title": "Entrega de medallas de los iluminatis",
    "description": "Solo para el mundo de los mejores electos del mundo",
    "stream": "",
    "date": "",
    "isOnline": false,
    "isPresential": true
  }
]
```

---

### GET `/online`

Returns a list with all online events

```json
[
    {
        "_id": "6233bc9e2f312cb9eb36fe0d",
        "title": "Victoria del Equipo 4",
        "description": "La entrega de los alucinantes premios para el Equipo 4 el ganador del Hackathon",
        "stream": "",
        "date": "",
        "isOnline": true,
        "isPresential": false
    },
    {
        "_id": "6233bea6c5be7e68620334bb",
        "title": "Quilmes Campion",
        "description": "El equipo mas importante del mundo mundial campion de la primera nacional",
        "stream": "",
        "date": "",
        "isOnline": true,
        "isPresential": true
    }
]
```

---

### POST `/` (*)

Allows you to add an event. For this the user must be 'manager' and that is validated by the head:

```json
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjIzMzhiYzE2ZDAxNzZmMThlYjZhMGQ2In0sImlhdCI6MTY0NzU0OTg5MiwiZXhwIjoxNjQ3NjM2MjkyfQ.lP6bguKIy7_w4SWneflIRH6FF9MrvEcRKVb8Waz5P2U"
}
```

The body must have the event data:

```json
{
  "title": "Victoria del Equipo 4",
  "description": "La entrega de los alucinantes premios para el Equipo 4 el ganador del Hackathon",
  "stream": "",
  "date": "",
  "isOnline": true,
  "isPresential": false
}
```