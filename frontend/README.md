# Frontend Setup

## 1. Installing Packages

```
npm install
```

## 2. Setup Firebase project

Data storage(bucket) will be required to store images. You have to create your own Firebase Project.

[Firebase setup reference](https://samuelbankole.medium.com/google-firebase-in-react-1acc64516788)

## 3. Setup Enviroment

In the root directory of your React project (In frontend folder), create a file named `.env`.
You can create this file manually or by using a command-line tool.

Define environment variables: In the `.env` file, you can define environment variables using the KEY=VALUE syntax.

### Create environment variables (KEY=VALUE pairs)

```
REACT_APP_FIREBASE_API_KEY=apiKey
REACT_APP_FIREBASE_AUTH_DOMAIN=authDomain
REACT_APP_FIREBASE_PROJECT_ID=projectId
REACT_APP_FIREBASE_STORAGE_BUCKET=storageBucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=messagingSenderId
REACT_APP_FIREBASE_APP_ID=appId
REACT_APP_FIREBASE_MEASUREMENT_ID=measurementId
REACT_APP_FIREBASE_URL=Firebase-Image-Bucket-URL

REACT_APP_API_URL=Backend-URL
```

Values can be retrieved from Step 2 in project setting, also provided in reference.
**Backend URL** will be the backend server `http://localhost:####` any port depending being used by backend.

Following environment variables are already being used in the React project.

For [React .env reference](https://medium.com/@bhairabpatra.iitd/env-file-in-react-js-09d11dc77924)

## 4. Starting the Frontend

Before running the frontend, make sure backend is running.

Run the following command:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
