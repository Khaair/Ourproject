import React from 'react'

export default function A(props) {
    return (
        <div>
            <h1 style={{color:"red",marginTop:"10px"}}>We are {props.message}</h1>
        </div>
    )
}
