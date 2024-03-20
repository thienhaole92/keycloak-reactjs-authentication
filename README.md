# keycloak-reactjs-authentication

This web application demonstrates how to use `keycloak` as an authentication and an authorization system for a client application (written in React).

The functionalities of this application are the following:

- A client application, which has a public page and a protected page (users have to login to view).
- The client application allows to login using username and password.
- Keycloak in this scenario keeps the identity of the users and generates tokens which are used to authenticate a user.

## Prerequisites

- Docker
- Docker Compose

## Installation steps

- Run the `docker-compose.yaml` file, which deploys [`keycloak`](https://github.com/keycloak/keycloak) and [`keycloak-config-cli`](https://github.com/adorsys/keycloak-config-cli)

```shell script
npm install
```

- build and start the application

```shell script
npm run dev
```

Now the application is ready to be used navigating on `http://localhost:3000`
