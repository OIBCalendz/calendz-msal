
## Badges

[//]: # ([![MIT License]&#40;https://img.shields.io/apm/l/atomic-design-ui.svg?&#41;]&#40;https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs&#41;)

[//]: # ([![CodeFactor]&#40;https://www.codefactor.io/repository/github/l-clem/bidgames/badge&#41;]&#40;https://www.codefactor.io/repository/github/l-clem/bidgames&#41;)
![GitHub repo size](https://img.shields.io/github/repo-size/OIBCalendz/calendz-msal)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
# About us

The "Calendz MSAL" project is a microservice that helps users log in with their Microsoft 365 account.

The user must be a student of the Skills and Development Network see [Compétences & Développement](https://www.competences-developpement.com).

## Tech Stack

**Server:** Express


## Features

- A full featured API with authentification by Oauth2.

Cf. [Release section](https://github.com/OIBCalendz/calendz-msal/releases)

### Environment Variables

To run this project, you will need to add the following environment variables into your file : `env.dev`
```dotenv
CLOUD_INSTANCE="Enter_the_Cloud_Instance_Id_Here" # cloud instance string should end with a trailing slash
TENANT_ID="Enter_the_Tenant_Info_Here"
CLIENT_ID="Enter_the_Application_Id_Here"
CLIENT_SECRET="Enter_the_Client_Secret_Here"

REDIRECT_URI="http://localhost:3000/auth/redirect"
POST_LOGOUT_REDIRECT_URI="http://localhost:3000"

GRAPH_API_ENDPOINT="Enter_the_Graph_Endpoint_Here" # graph api endpoint string should end with a trailing slash

EXPRESS_SESSION_SECRET="Enter_the_Express_Session_Secret_Here"
```
Cf. [Add Azure App Registration Details](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-nodejs-webapp-msal#add-app-registration-details)
## FAQ

#### Where's the API documentation ?

The API documentation is available on the *Swagger API* page of the application.

Now you can go on your browser and type :
- https://docs-calendz-msal.locascio.fr/{version} to get to the API documentation.


## Run Locally
*❗ You can't run this project without the keys needed for authentification*

### Clone the project

```bash
  git clone https://github.com/MSPR-Dev-Appli-IA/api.git
```

Go to the project directory

```bash
  cd calendz-msal
```

### Install dependencies

```bash
  npm ci
```

Then start a terminal for each commands

```bash
  npm run start
```

Now you can go on your browser and type :
- https://docs-calendz-msal.locascio.fr/{version} to get to the API documentation.
- http://localhost:3000/auth/signin to get to the application website.

## Authors
- [@ClemLcs](https://github.com/ClemLcs)

