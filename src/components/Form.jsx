import React from "react";
import { useState } from "react";

function Form({ addTransaction }) {
  //states
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  //handle submit
  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      //object holding the new inputs
      id: Date.now(),
      category: category,
      category: category,
      amount: amount,
      description: description,
      date: date,
    };
    addTransaction(newTransaction); //Call the addTransaction function from app.jsx 
    setAmount("");
    setCategory("");
    setDate("");
    setDescription(""); // reset the inputs after form is submitted
  }
  return (
    <div className="container mb-2">
      <form onSubmit={handleSubmit}>
        <input
          className="me-2 p-1 mb-2"
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          value={category}
          required
        />
        <input
          className="me-2 p-1"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          value={amount}
          required
        />
        <input
          className="me-2 p-1"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
          required
        />
        <input
          className="me-2 p-1"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          value={date}
          type="date"
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default Form;
