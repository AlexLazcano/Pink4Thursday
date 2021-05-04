## Apollo Server

### A Note on Server Environments
- `development`: Environment searches for a `postgres` and a `redis` Docker container
- `test`: Environment runs on `localhost`, facilitates testing without Docker container (**note:** will require a local instances of both redis and postgres running)

#### Local Environment Config
1. Create a `.env` and a `.env.example` file in the `/server` directory
2. In the `.env` file add the following variables
```
NODE_ENV=       # desired runtime environment (configured to be one of "development", "production", or "test")
PORT=           # port to run the express server
DATABASE_URI    # postgres URI (not required, only for prod)
REDIS_URI=      # URI for redis instance running on localhost
REDIS_SECRET=   # custom secret for keys held by redis
```
3. In the `.env.example` file, add the same variables but **without** their values (production checks these values to ensure all environment variables have a valid value)
```
NODE_ENV= 
PORT=
DATABASE_URI=
REDIS_URI=
REDIS_SECRET=
```

### Development Environment - Docker (recommended)

1. Run the docker-compose
```
docker-compose up -d
```
3. In a browser, go to `localhost:PORT/graphql` (where PORT is your specified port number in `.env`)
4. When finished, shut down the docker-compose
```
docker-compose down
```

### Test Environment - localhost

1. cd into `/server` directory
2. Run the following startup command:
```
# Ensure NODE_ENV is set to "test"
...

./start.sh
```
3. In a browser, go to `localhost:PORT/graphql` (where PORT is your specified port number in `.env`)