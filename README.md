# React + TypeScript + Vite
# House Selling Platform

## Setup Process

### 1. Clone Repository
Clone the repository to your local machine:
git clone https://github.com/MuradIsayev/qbitTech-assignment.git

### 2. Install Dependencies
Navigate to the project directory and install dependencies:
cd qbitTech-assignment
npm install

### 3. Start JSON Server
Ensure you have json-server installed globally. If not, install it:
npm install -g json-server

Start the JSON Server using the existing db.json file:
json-server --watch db.json
The mock backend will run at http://localhost:3000/houses.

### 4. Start React Application
Open a new terminal window/tab and start the React application:
npm run dev
The React application will run at http://localhost:5173.