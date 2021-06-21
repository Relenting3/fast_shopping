# fast_shopping_server

Please follow the following steps to run Fast Shopping Server.

## How to run

**1.-** Create a .env file with the variables names located at .env.example. CORS and PORT should remain intact, but you can change the PORT value if you like

**2.-** Run the following command to install all the dependencies
```
npm i
```

**3.-** In the root of the project directory, run the following command to create the DB with test data.
```
npm run db
```

**4.-** Start the server by running the following command.
```
npm start
```

***Server should start at http://localhost:3001/  if you didn't change PORT value.***