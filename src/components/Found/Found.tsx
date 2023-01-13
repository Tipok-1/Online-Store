import React from "react";
import '../Found/Found.css'

const Found = (props: { found: number }): JSX.Element => {
  return (
    <div className='found'> Found: {props.found}
    </div>
  )
}

export default Found;