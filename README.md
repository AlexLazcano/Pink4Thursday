<div>
    <p align="center">
        <img height="238px" width="451px" src="app/assets/LogoPT.png" />
    </p>
</div>

# Pink4Thursday

A fullstack application project for [PinkThursday](https://www.facebook.com/Pink4Thursdays/)

## Development Instructions

### Apollo Server

#### Prerequisites
Ensure that the postgresql cli is installed. The latest release can be downloaded from [postgresql.org](https://www.postgresql.org/).

#### Local Environment Config
1. Create a `.env` and a `.env.example` file in your development environment.
2. In the `.env` file add the following variables
```
DATABASE_URL=   # database url goes here in the form postgresql://PSQL_USER:PSQL_PASSWORD@localhost:5432/PSQL_DATABASE
PORT=           # port to run the express server
```
3. In the `.env.example` file, add the same variables but **without** their values
```
DATABASE_URL=
PORT=
```
4. If any variable names were modified - or there isn't a `env.d.ts` file present in `/src`, run the following command to build TypeScript types for your variables
```
npm genv
```

#### Build/Run Apollo Server
1. cd into the `/server` directory
2. Run the local service to watch for TypeScript changes
```
npm run watch
```
3. Run the development server
```
npm run dev
```
4. In a browser, go to `localhost:4000/graphql` (replace 4000 with your specified port number)