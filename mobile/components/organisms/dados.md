# APIs

## O que são APIs:

São Aplicações Externas que fornecem ou recem dados

baseURL (- https://devbty.com.br)

endpoints (/api/users)

url: https://devbty.com.br/api/users

## Protocolo HTTP:

GET
POST
PUT
PATCH
OPTIONS

GET https://devbty.com.br/api/users
Resposta
200 - 201
400 -  401, 404, 409
500 
[
    {
        name: "test1"
    }
]
POST https://devbty.com.br/api/users
headers:
{
    Content-Type: application/json
}
body:
{
    "name": "test2"
}

Resposta

201 - created

----

Requisição:

verbo do protocolo HTTP (GET, POST, PUT, DELETE)
endereço do recurso (https://devbty.com.br/api/users)

corpo da requisição:

JSON (JAVASCRIPT OBJECT NOTATION)

headers:

Content-Type: application/json

To use this mock, call: POST https://amock.io/api/fastfoodapp/restaurants with content type: application/json



