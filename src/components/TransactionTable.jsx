import React from "react";
import { useState } from "react";
import data from "./db.json";

function TransactionTable({ transactionDetails, setTransactionDetails }) {
  //passing in the data as prop from parent component and destructuring it
  console.log(transactionDetails);
  const [searchItem, setsearchItem] = useState(""); // for holding the users search input

  // Function to filter transactions based on the search term
  const filteredTransactions = transactionDetails.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchItem.toLowerCase()); //filters through decsription
  });

  //function to handle the delete
  function handleDelete(id) {
    const remainingTransactions = transactionDetails.filter(
      (transaction) => transaction.id !== id
    );
    return setTransactionDetails(remainingTransactions);
  }
  return (
    <div className="container">
      <input
        value={searchItem}
        onChange={(e) => setsearchItem(e.target.value)}
        placeholder="search description"
      />
      {/* <button onClick={handleClick} >Search</button> */}

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {searchItem !== ""
            ? filteredTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td onClick={() => handleDelete(transaction.id)}>X</td>
                </tr>
              ))
            : transactionDetails.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.date}</td>
                  <td onClick={() => handleDelete(transaction.id)}>X</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;

