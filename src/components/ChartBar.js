import React from 'react'
import './ChartBar.css'
export default function ChartBar(props) {
  let val = props.mv
  let scale = props.scale
  let proportion = val / scale *100
  console.log(val,scale,proportion);
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ 'height': `${proportion }%` }}>

        </div>
        <div className='chart-bar__label'>
            {props.month}
        </div>
      </div>
    </div>
  )


}
