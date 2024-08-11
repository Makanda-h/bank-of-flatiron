import React from "react";
import { useState } from "react";
import data from "./db.json";

function TransactionTable({ transactionDetails, setTransactionDetails }) {
  //passing in the data as prop from parent component and destructuring it
  console.log(transactionDetails); // Check if 'transactionsDetails' prop is received correctly
  const [searchTerm, setSearchTerm] = useState(""); // state to hold the users search input

  // Function to filter transactions based on the search term
  const filteredTransactions = transactionDetails.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase()); //checking to see if the description includes search term
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search item"
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
          {searchTerm !== ""
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

  // If search term is not empty, show filtered transactions
  // If search term is empty, show all transactions
}

export default TransactionTable;

// As a user, I can:See a table of all transactions.
//Fill out and submit the form to add a new transaction.
// This should add the new transaction to the table *the new transaction does not have to be persisted to the backend*
//Filter transactions by typing into the search bar.
// Only transactions with a description matching the search term should be shown in the transactions table.
// i need to fetch the data from local server and then map through each data and display it
//bonus
// As a user, I should be able to:

//- Sort transactions alphabetically by category or description.

//- Delete a transaction which will remove it from the table
