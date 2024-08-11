import './App.css'
import TransactionTable from "./components/TransactionTable.jsx";
import { useEffect, useState } from "react";
import Form from "./components/Form.jsx";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const [transactions, setTransactions] = useState([]);
  // useState stores the transactions in the component's state
  // fetching the data
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        setTransactions(data);
        console.log(data);
      });
  }, []);
  // function to add the new transaction
  function addTransaction(newTransaction) {
    setTransactions((prevTransactions) => [
      newTransaction,
      ...prevTransactions,
    ]);
  }

  return (
    <div className="container mt-">
      <h1 className="mb-1">Bank Of Flatiron</h1>
      <Form addTransaction={addTransaction} /> {/* //passing in the addtransaction function as a prop */}
      <TransactionTable
        transactionDetails={transactions}
        setTransactionDetails={setTransactions}
      />
    </div>
  );
}

//passing the data as a prop to transaction table
export default App;


