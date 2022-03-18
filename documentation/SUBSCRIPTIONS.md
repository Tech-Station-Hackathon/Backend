# Events Documentation

All the routes that we will see next are found under the path `/api/subscriptions`. And those with a (*) in the name require additional permissions

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
  "eventId": "6233bea6c5be7e68620334bb",
  "accessType": "presential"
}
```