# Payment Collection App - Frontend

This is the frontend for the **Payment Collection App** built using **React Native (Expo)**.

## Tech Stack
- React Native
- Expo
- Axios

## Features
- Enter account number
- Fetch loan details from backend API
- Display:
  - Account Number
  - Issue Date
  - Interest Rate
  - Tenure
  - EMI Due
- Enter EMI payment amount
- Submit EMI payment
- Display payment success confirmation

## Backend API

The frontend connects to the backend server:


http://localhost:5000/api


Available endpoints:


GET /api/customers
POST /api/payments
GET /api/payments/:account_number


## Run Frontend Locally

Install dependencies:
npm install


Start the Expo development server:
npx expo start --web


Open the application in the browser:
http://localhost:8081


## Author

Aijithia Jacob
