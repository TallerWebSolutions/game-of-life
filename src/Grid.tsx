import React from 'react'
import Line from './Line'

const Grid = ({ life }) => {

    const line = life[0]
    
    const Lines = [
        <Line />,
        <Line />,
        <Line />,
        <Line />,
    ]

    return Lines
}

export default Grid 