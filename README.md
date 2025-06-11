
# Leads Assignment

## Install & Run the app

Using Docker Compose

```bash
docker-compose up --build
```

Access to application with ```http://localhost:8080```

*MAKE SURE that backend base url is end with "/", for example http://localhost:3000/api/*
## Configurations:

### Env variables

```
# Backend port exposed on host
BACKEND_PORT=3000

# Frontend port exposed on host
FRONTEND_PORT=8080

# Path to the SQLite DB file inside the container
DATABASE_PATH=./data/database.sqlite

```

When changing the default port for backend (3000) Docker is rewriting the config.ts file in frontend app. To do so manually (without docker) run one of the following options:

Using .env:
```
source .env
bash docker-entrypoint.bash
```
or using command line only
```
API_BASE_URL=adfaf bash docker-entrypoint.bash
```

### Using .env
in this case use 
```
cp .env.example .env
```


## Project Structure
by folder:
- ```backend``` - Typescript + Express backend application
- ```fronend``` - Vue.js + Vite frontend application

