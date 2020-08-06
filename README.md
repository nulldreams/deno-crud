# deno-crud
Deno CRUD + MongoDB

## Developer Payload
```json
{
    "name": "Igor",
    "birthdate": "1996-02-27",
    "sex": "male",
    "hobby": "dev"
}
```

## POST /developers
```json
{
    "success": true,
    "data": {
        "$oid": "5f2c149a00cf4bdd00909923"
    }
}
```

## GET /developers
```json
{
    "success": true,
    "data": [
        {
            "_id": {
                "$oid": "5f2c149a00cf4bdd00909923"
            },
            "name": "Igor",
            "birthdate": "1996-02-27",
            "sex": "male",
            "hobby": "dev"
        }
    ]
}
```
