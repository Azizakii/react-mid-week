import React from 'react'
import './display.module.scss'

export const Display = React.memo(({value}: {value: number}) => {
    return <span>{value}</span>
})