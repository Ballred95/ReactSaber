import React from 'react'

var randomColor = Math.floor(Math.random()*16777215).toString(16);

export default function() {
    return(<div className = 'saber' style = {{backgroundColor: `#${randomColor}`, width: '100px', height: '300px'}}>
        
        
        </div>
    )
}