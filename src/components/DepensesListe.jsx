import React, { useContext, useState } from "react";
import { addCtx } from "../store/AddDepenseContext";
import styles from "./DepenseList.module.css";
import "./Depenses.css";
import "./FilterDepense.css";
import DepenseItem from "./DepenseItem";
import Chart from "./Chart";
import FilterDate from "./FilterDate";
import { filterCtx } from "./../store/FilterDateContext";

export default function DepensesListe() {
  const ajoutCtx = useContext(addCtx);
  let listDepenses = ajoutCtx.tabDepenses;
  let listDateS = ajoutCtx.tabDepenses.map((d) => {
    return d.date.getFullYear();
  });
  const yearContext = useContext(filterCtx);
  const nonDuplicateYears = [];
  //remove duplicate years for the filterDate component
  listDateS.forEach((element) => {
    if (!nonDuplicateYears.includes(element)) {
      nonDuplicateYears.push(element);
    }
  });
  const depPerYear = listDepenses;
  function handleYearChange(d) {
    //console.log("event change",d.target.value);
    yearContext.setYear(Number(d.target.value));
  }
  if (listDepenses.length > 0) 
  return (
    <div className="expenses">
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter By Year</label>
          <select name="date" id="date" onChange={handleYearChange}>
            {nonDuplicateYears.map((d) => {
              return <FilterDate key={d.id} date={d}></FilterDate>;
            })}
          </select>
        </div>
      </div>
      <Chart></Chart>
      <ul className={styles.expenses_list}>
        {depPerYear.map((d) => {
          console.log(
            "full dep date ",
             d.date.getFullYear(),
            "  ",
             yearContext.cYear
          );
          if (yearContext.cYear===0){
            yearContext.setYear(d.date.getFullYear());
          }else{
            if (d.date.getFullYear() === yearContext.cYear)
              return <DepenseItem key={d.id} oneDepense={d}></DepenseItem>;
          }
            
        })}
      </ul>
    </div>
  );
}
