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

Within the development environment, create a table named _pinkthursday_ in postgres on the default user.

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
4. In a browser, go to `localhost:4000/graphql`