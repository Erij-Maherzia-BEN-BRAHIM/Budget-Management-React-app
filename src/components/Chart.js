import React from 'react'
import './Chart.css'
import { useContext } from 'react';
import { addCtx } from '../store/AddDepenseContext';
import ChartBar from './ChartBar'
export default function Chart() {
  const ajoutCtx = useContext(addCtx);
  let listDepenses = ajoutCtx.tabDepenses;
  return (
    <div className='chart'>
      <ChartBar></ChartBar>
    </div>
  )
}
