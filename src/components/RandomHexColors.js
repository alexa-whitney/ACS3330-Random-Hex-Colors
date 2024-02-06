import React from 'react';
import '../App.css';

export default function RandomHexColors() {
    return (
        // Three 100px by 100px squares with background colors
        <div className='square-container'>
            <div className='square-one'></div>
            <div className='square-two'></div>
            <div className='square-three'></div>
        </div>
    )
}