import React, { useEffect } from 'react'
import './Chart.css'
import { useContext } from 'react';
import { addCtx } from '../store/AddDepenseContext';
import ChartBar from './ChartBar'
import { useState } from 'react';
import { filterCtx } from '../store/FilterDateContext';
export default function Chart(props) {
  const ajoutCtx = useContext(addCtx);
  let listDepenses = ajoutCtx.tabDepenses;
  console.log("am chart ", props.payload);
  const yearCtx = useContext(filterCtx)
  let data = props.payload
  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var DynamicArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // console.log(DynamicArray)
  // console.log("am chart Bar ", props.payload)

  for (let i in data) {
    //console.log("data[", i, "]=", data[i]);
    DynamicArray[data[i].date.getMonth()] += Number(data[i].amount);
  }
  var scale = 0;
  console.log("duyn array", DynamicArray);
  for (let i in DynamicArray) {
    scale = Math.max(DynamicArray[i], scale)
  }
  console.log('in in da', scale);
  //console.log("da  =", DynamicArray);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  return (
    <div className='chart'>
      <ChartBar month={monthNames[0]} scale={scale} mv={DynamicArray[0]}></ChartBar>
      <ChartBar month={monthNames[1]} scale={scale} mv={DynamicArray[1]}></ChartBar>
      <ChartBar month={monthNames[2]} scale={scale} mv={DynamicArray[2]}></ChartBar>
      <ChartBar month={monthNames[3]} scale={scale} mv={DynamicArray[3]}></ChartBar>
      <ChartBar month={monthNames[4]} scale={scale} mv={DynamicArray[4]}></ChartBar>
      <ChartBar month={monthNames[5]} scale={scale} mv={DynamicArray[5]}></ChartBar>
      <ChartBar month={monthNames[6]} scale={scale} mv={DynamicArray[6]}></ChartBar>
      <ChartBar month={monthNames[7]} scale={scale} mv={DynamicArray[7]}></ChartBar>
      <ChartBar month={monthNames[8]} scale={scale} mv={DynamicArray[8]}></ChartBar>
      <ChartBar month={monthNames[9]} scale={scale} mv={DynamicArray[9]}></ChartBar>
      <ChartBar month={monthNames[10]} scale={scale} mv={DynamicArray[10]}></ChartBar>
      <ChartBar month={monthNames[11]} scale={scale} mv={DynamicArray[11]}></ChartBar>
    </div>

  )
}
