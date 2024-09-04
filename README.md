# technical-assessment develops today - Country info App

##Description
The **Country Info App** is a full-stack application designed to provide detailed information about countries. It is divided into two parts: a backend developed with Node.js and a frontend developed with React. 
The application allows users to view a list of countries, access specific details about a country, view its flag, neighboring countries, and a bar chart showing the country's population growth over time.

## Technologies Used

### Backend
- Node.js
- Express.js
- Axios (for external API calls)

### Frontend
- React.js
- Vite
- Recharts (for charts)
- Material UI (for UI design)
- Axios (to consume the backend API)
- ESLint and Prettier (to maintain code quality)


##Instructions to install the project
## 1. Clone the repository

```bash
git clone https://github.com/MauriJC/technical-assessment.git
cd technical-assessment
```
###2. Backend setup
1. Navigate to backend folder:
``` bash 
cd backend
```
2.Install dependencies:
``` bash
npm install
```

3. Run the server:
```bash
npm start
```

The server will be running on http://localhost:3001
You can change the port in .env file


##3. Frontend setup
1. Navigate to the frontend folder
```bash
cd ../frontend
```

2. Install dependencies
``` bash
npm install
```

3.Run the frontend server:
```bash
npm run dev
```
Usage
1. Access the list of countries at http://localhost:3000.
2. Click on any country to view details such as its flag, neighboring countries, and a population growth chart.

