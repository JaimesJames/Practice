// import logo from './logo.svg';

import "./App.css";
import TransactionComponent from "./components/TransactionComponent";
import FormComponent from "./components/FormComponent";
import { useState, useEffect, useReducer } from "react";

import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import {v4 as uuidv4} from 'uuid'; uuidv4()

// const Title=()=><h1>Accounting</h1>
// const Description=()=><p>Day Racord</p>

function App() {
  const design = { fontWeight: "bold", textAlign: "center" };
  const initstate = [
    { id: 1, title: "Travel", amount: -20000 },
    { id: 2, title: "Salary", amount: 200000 },
    { id: 3, title: "Food", amount: -50000 },
  ];

  const [item, setItems] = useState(initstate);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setreportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((previousItem) => {
      return [newItem, ...previousItem];
    });
  };

  useEffect(() => {
    const amounts = item.map((item) => item.amount);
    const income = amounts
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0); //summery income
    const expense = amounts
      .filter((e) => e < 0)
      .reduce((total, e) => (total += Math.abs(e)), 0); //summery expense
    setReportIncome(income.toFixed(2));
    setreportExpense(expense.toFixed(2));
  }, [item]);

  // reducer
  const [count, setCount] = useState(0);
  const countReducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + action.payload;
      case "sub":
        return state - action.payload;
      case "cle":
        return 0;
      default:
        return setCount(0);
    }
  };
  const [result, countDispatch] = useReducer(countReducer, count);

  const [showReport, setShow] = useState(true);
  const showReducer = (state, action) => {
    switch (action.type) {
      case "show":
        return true;
      case "hide":
        return false;
      default:
        return setShow();
    }
  };

  const [show, dispatch] = useReducer(showReducer, showReport);

  return (
    // Context create GlobalData
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1
          style={{
            color: "rgb(255, 78, 78)",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          Accounting
        </h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Transaction</Link>
              </li>
              <li>
                <Link to="/insert">History</Link>
              </li>
            </ul>

            <Routes>
              <Route
                path="/"
                exact
                element={
                  <div>
                    {show && <ReportComponent />}
                    <div align="center">
                      <button onClick={() => dispatch({ type: "show" })}>
                        show
                      </button>
                      <button onClick={() => dispatch({ type: "hide" })}>
                        hide
                      </button>
                    </div>
                    <FormComponent onAddItem={onAddNewItem} />
                    <p style={design}>Day Racord</p>
                  </div>
                }
              />

              <Route
                path="/insert"
                element={<TransactionComponent items={item} />}
              ></Route>
            </Routes>
          </div>
        </Router>

        <div align="center">
          <h1>{result}</h1>
          <button onClick={() => countDispatch({ type: "add", payload: 10 })}>
            add
          </button>
          <button onClick={() => countDispatch({ type: "sub", payload: 5 })}>
            bate
          </button>
          <button onClick={() => countDispatch({ type: "cle" })}>clear</button>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
