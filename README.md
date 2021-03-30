<div>
    <p align="center">
        <img height="238px" width="451px" src="app/assets/LogoPT.png" />
    </p>
</div>

# Pink4Thursday

**A fullstack application project for [PinkThursday](https://www.facebook.com/Pink4Thursdays/)**

## Development Instructions

#### Local Environment Config
1. Create a `.env` and a `.env.example` file in your development environment.
2. In the `.env` file add the following variables
```
DATABASE_URL=   # database url goes here in the form postgresql://PSQL_USER:PSQL_PASSWORD@localhost:5432/PSQL_DATABASE
PORT=           # port to run the express server
NODE_ENV=       # desired runtime environment (configured to be one of "development", "production", or "test")
```
3. In the `.env.example` file, add the same variables but **without** their values (production checks these values to ensure all environment variables have a valid value)
```
DATABASE_URL=
PORT=
NODE_ENV=
```
4. If any variable names are modified - or there isn't a `env.d.ts` file present in `/src`, run the following command to build TypeScript types for your variables
```
npm genv
```
5. **Optional:** Add a union type to further enforce the NODE_ENV _(only optional if environment variables are regenerated)_
```
# src/env.d.ts
interface ProcessEnv {
    ...other env variables
    NODE_ENV: "development" | "production" | "test";
}
```