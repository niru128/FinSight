# FinSight – Portfolio Analytics Dashboard

FinSight is a full-stack portfolio analytics dashboard that provides real-time insights into stock investments.
The application reads portfolio holdings from an Excel file, fetches live market data, and presents interactive analytics including portfolio performance and sector allocation.

---

## Live Demo

Frontend (Dashboard):
https://fin-sight-woad.vercel.app/

Backend API:
https://finsight-0c05.onrender.com

GitHub Repository:
https://github.com/niru128/FinSight

---

## Features

• Real-time stock price fetching using Yahoo Finance API
• Portfolio investment and current value calculation
• Gain/Loss tracking for each stock
• Sector grouping and sector summary analytics
• Interactive sector allocation pie chart
• Clean and responsive dashboard UI
• Smooth animations using Framer Motion
• Automatic portfolio refresh every few seconds

---

## Tech Stack

Frontend
• Next.js
• React
• TypeScript
• Tailwind CSS
• Recharts
• Framer Motion
• Axios

Backend
• Node.js
• Express.js
• Yahoo Finance API
• XLSX (Excel parsing)

Deployment
• Vercel (Frontend)
• Render (Backend)

---

## How It Works

1. Portfolio data is read from an Excel file on the backend.
2. The backend fetches live stock data using Yahoo Finance.
3. The frontend calls the backend API and builds portfolio analytics.
4. Sector grouping and calculations are performed in the frontend.
5. The dashboard displays tables and charts for portfolio insights.

---

## Installation (Local Setup)

### Clone Repository

git clone https://github.com/niru128/FinSight.git

cd FinSight

---

### Backend Setup

cd backend

npm install

npm start

Server runs on
http://localhost:5000

---

### Frontend Setup

cd frontend

npm install

npm run dev

Frontend runs on
http://localhost:3000

---

## API Endpoints

Get Portfolio Stocks
GET /api/stocks

Get Stock Market Data
GET /api/stocks/:symbol

Example

/api/stocks/HDFCBANK.NS

---

## Screenshots

Portfolio Dashboard
<img width="1916" height="898" alt="image" src="https://github.com/user-attachments/assets/0504dc30-b383-492e-bda8-37972ee3bbd4" />


Sector Allocation Chart
<img width="1900" height="815" alt="image" src="https://github.com/user-attachments/assets/d2c585bf-4f70-42f0-8a57-6b44c13915a9" />

Sector Distribution
<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/29753ff9-bcd9-4476-9726-cf26ac0e95f3" />


---

## Future Improvements

• Stock price history charts
• Top gainers and losers analytics
• Portfolio risk analysis
• User authentication and multiple portfolios
• AI-driven investment insights

---

## Author

Niranjan CB

---

## License

This project is created for educational purposes.
