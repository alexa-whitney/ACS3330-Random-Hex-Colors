import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

export default function RandomHexColors() {
	const [colors, setColor] = useState([]);

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * (max + 1));
	}

	// This function returns a random hex color using by calling getRandomInt() three times 
	// and combining the results with # to create a hex color string using .toString(16)
	// where 16 is the radix or base of the number system representing a hexidecimal number.
	// Ensure each color component has two digits by using .padStart(2, '0') to add a leading 0
	const getRandomHexColor = () => {
		const r = getRandomInt(255).toString(16).padStart(2, '0');
		const g = getRandomInt(255).toString(16).padStart(2, '0');
		const b = getRandomInt(255).toString(16).padStart(2, '0');
		const hexColor = `#${r}${g}${b}`;
		// console.log(`Generated Hex Color: ${hexColor}`);
		return hexColor;
	};


	// Get three random hex colors when the component mounts
	useEffect(() => {
		const newColors = [getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
		// console.log("New Colors Array:", newColors);
		setColor(newColors);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// This function is called when the user clicks the reset button and also generates three new colors
	const resetColors = () => {
		const newColors = [getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
		console.log("Reset Colors Array:", newColors);
		setColor(newColors);
	}

	return (
		<div className='game-container'>
			<div className='square-container'>
				{colors.map((color, index) => {
					// console.log(`Style for square ${index}:`, { backgroundColor: color }); // Log the style object for each square
					return (
						<div key={index} className='square' style={{ backgroundColor: color }}></div>
					);
				})}
			</div>
			<p className='hex-color'>#XXXXXX</p> {/* Placeholder for the hex color */}
			<p className='status-message'>Correct/Incorrect</p> {/* Placeholder for status message */}
			<button className='reset-button' onClick={resetColors}>Reset/Play Again</button>
		</div>
	);
}