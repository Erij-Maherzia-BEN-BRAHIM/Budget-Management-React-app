import React from 'react'

export default function FilterDate(props) {
  let date = props.date
  return (
    <option >{date.toLocaleString('en-us', { year: "numeric" })}</option>
  )
}
