# Personal Finance App 📱

A **React Native mobile application built with Expo** that helps users manage their daily finances by tracking income and expenses.

The application allows users to **add, edit, delete, and categorize transactions**, view financial statistics, and analyze monthly spending using charts.

---

## Features 🚀

* Add new transactions
* Edit existing transactions
* Delete transactions
* Categorize expenses (Food, Rent, Shopping, Travel, Bills, Salary, Groceries)
* View total balance
* Filter transactions by category
* Category spending statistics (Pie Chart)
* Monthly analytics (Bar Chart)
* Persistent data storage using AsyncStorage
* Modern UI using React Native Paper
* Floating Action Button for quick transaction entry

---

## Technologies Used 🛠

* React Native
* Expo
* JavaScript
* React Navigation
* React Native Paper (Material UI)
* AsyncStorage
* React Native Chart Kit
* Context API for global state management

---

## Project Structure 📂

```
PERSONAL-FINANCE-APP
│
├── assets
│
├── src
│   ├── components
│   │   ├── BalanceCard.js
│   │   └── TransactionItem.js
│   │
│   ├── context
│   │   ├── AppReducer.js
│   │   └── GlobalState.js
│   │
│   └── screens
│       ├── AddTransactionScreen.js
│       ├── EditTransactionScreen.js
│       ├── HomeScreen.js
│       ├── MonthlyStatsScreen.js
│       └── StatsScreen.js
│
├── App.js
├── app.json
├── index.js
├── package.json
└── .gitignore
```

---

## Installation ⚙️

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/personal-finance-app.git
```

Navigate to the project folder:

```
cd personal-finance-app
```

Install dependencies:

```
npm install
```

Start the Expo development server:

```
npx expo start
```

---

## Running the App 📱

1. Install the **Expo Go** app on your phone.
2. Run the project using:

```
npx expo start
```

3. Scan the QR code using Expo Go to open the app.

---

## Screens 📊

**Home Screen**

* Shows total balance
* Displays transaction list
* Filter transactions by category

**Add Transaction Screen**

* Add new income or expense entries

**Edit Transaction Screen**

* Modify transaction details

**Statistics Screen**

* Shows category spending using a Pie Chart

**Monthly Stats Screen**

* Displays monthly spending using a Bar Chart

---

## Future Improvements 🔮

* User authentication
* Budget tracking
* Dark mode
* Export reports to PDF or CSV
* Cloud storage with Firebase
* Recurring transactions

---

## Author 👨‍💻

Tanmay Agavile

---

## License

This project is created for educational purposes.
