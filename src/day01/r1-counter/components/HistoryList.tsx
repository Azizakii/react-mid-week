import React from "react"


export const History = React.memo(({items}: {items: number[]})  => {
    return (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
})