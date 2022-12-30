import React from 'react'
import Card from '../UI/Card/Card'

import "./Menu.css"

function Menu(props) {
 
  console.log(props.setActive)

  return (
    <Card className="menuCard">
        <ul>
            <li className={`${props.setActive === 1 ? "active" : "link"}`} onClick={() => props.setPageState(1)}>Daily</li>
            <li className={`${props.setActive === 2 ? "active" : "link"}`}  onClick={() => props.setPageState(2)}>Weekly</li>
            <li className={`${props.setActive === 3 ? "active" : "link"}`}  onClick={() => props.setPageState(3)}>Monthly</li>
        </ul>
    </Card>
  )
}

export default Menu