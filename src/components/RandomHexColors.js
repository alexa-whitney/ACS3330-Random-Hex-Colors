import React from 'react';
import '../App.css';

export default function RandomHexColors() {
    return (
      <div className='game-container'>
        <div className='square-container'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
        </div>
				<p className='hex-color'>#XXXXXX</p> {/* Placeholder for the hex color */}
        <p className='status-message'>Correct/Incorrect</p> {/* Placeholder for status message */}
        <button className='reset-button'>Reset/Play Again</button>
			</div>
    )
}