# Backend Setup

## 1. Installing Packages

```
npm install
```

## 2. Setup Mongodb

Follow the [Reference](https://www.mongodb.com/docs/drivers/node/v4.1/quick-start/)

Save mongoDb **uri**, which will be used in step 3.

## 3. Setup Enviroment

In the root directory of your React project (In frontend folder), create a file named `.env`.
You can create this file manually or by using a command-line tool.

Define environment variables: In the `.env` file, you can define environment variables using the KEY=VALUE syntax.

### Create environment variables (KEY=VALUE pairs)

```
process.env.MONGODB_URL=your-mongodb-uri
```

For [node .env reference](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)


## 4. Starting the Backend Server

Backend server should run before frontend.

Run the following command:

### `npm run start`

Runs the server.
Open [http://localhost:3000](http://localhost:4000) to view it in your browser.