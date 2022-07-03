import React, { useContext, useRef } from "react";
import { addCtx } from "../store/AddDepenseContext";
import "./DepenseForm.css";
import "./NewDepense.css";
import { filterCtx } from './../store/FilterDateContext';
export default function DepenseForm() {
  const ajoutCtx = useContext(addCtx);
  const refTitle = useRef("");
  const refAmount = useRef("");
  const refDate = useRef("");
  const yearCtx = useContext(filterCtx)

  function submitHandler(e) {
    e.preventDefault();
    console.log(refDate);
    let NewDepense = {
      title: refTitle.current.value,
      amount: refAmount.current.value,
      date: new Date(refDate.current.value),
    };
    ajoutCtx.ajoutNewDepense(NewDepense);

  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense">
          <div className="new-expense__control">
            <label htmlFor="title" id="title">
              Title
            </label>
            <br />
            <input type="text" name="title" ref={refTitle} />
            <br />
            <label htmlFor="amount">Amount</label>
            <br />
            <input type="number" name="amount" id="amount" ref={refAmount} />
            <br />
            <label htmlFor="date">Date</label>
            <br />
            <input type="date" name="date" ref={refDate} id="date" />{" "}
          </div>
          <br />
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>{" "}
        </div>
      </form>
    </>
  );
}
