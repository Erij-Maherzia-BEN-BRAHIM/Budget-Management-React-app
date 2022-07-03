import React from "react";
import classes from "./DepenseDate.module.css";
export default function DepenseDate(props) {
  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date__day}>
        {" "}
        {props.date_d.toLocaleString("en-us", { day: "numeric" })}{" "}
      </div>
      <div className={classes.expense_date__year}>
        {" "}
        {props.date_d.toLocaleString("en-us", { year: "numeric" })}
      </div>
      <div className={classes.expense_date__month}>
        {" "}
        {props.date_d.toLocaleString("en-us", { month: "long" })}
      </div>
    </div>
  );
}
