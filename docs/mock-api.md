# Mock APIs

Quick start develop FE without Backend resolved.

- Run a mock server as a development APIs server.

- Easy declare routes and fake response payload.

- Follow standard RESTful APIs rules.

- Reduce stuck integrate FE - BE teams.

- Using [`json-server`](https://github.com/typicode/json-server) & [`json-server-auth`](https://github.com/jeremyben/json-server-auth). So see these official documents before!

## Add new any APIs

_Ex: need add new API `/api/products` to fetch products data._

- Goals:

  ```bash
      - GET: /api/products?page=&size=

      - GET: /api/products/:id

      - POST: /api/products

      - PUT: /api/products/:id

      - DELETE: /api/products/:id

  ```

- Steps:

  - Add your key `products` route to end `mock/db.json`.
    Ex:

        ````json
        {
            ...
            "products": [
                {
                    "id": 1,
                    "name": "keyboard",
                    "brand": "leopold"
                },
                 {
                    "id": 2,
                    "name": "mouse",
                    "brand": "leopold"
                }
            ]
        }

        ```

## Add new user

- Modified `users` key in `mock/db.json`

## Custom routes

- Modified `mock/routes.json`, follow standard rewrite regex from [express router](https://expressjs.com/en/guide/routing.html).
