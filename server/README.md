### Apollo Server

#### A Note on Environments
- `development`: Environment searches for a `postgres` Docker container
- `test`: Environment runs on `localhost`, facilitates testing without Docker container

#### Development Environment - Docker

1. cd into the `/server` directory
2. Run the docker-compose
```
docker-compose up -d
```
3. In a browser, go to `localhost:PORT/graphql` (where PORT is your specified port number in `.env`)
4. When finished, shut down the docker-compose
```
docker-compose down
```

#### Test Environment - localhost

1. cd into `/server` directory
2. Run the following startup command:
```
./start.sh
```
3. In a browser, go to `localhost:PORT/graphql` (where PORT is your specified port number in `.env`)