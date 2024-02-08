import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';

export default function RandomHexColors() {
	const [colors, setColors] = useState([]);
	const [answer, setAnswer] = useState('');
	const [feedback, setFeedback] = useState(''); // Hold the message that tells the user if they are correct or not
	const [incorrectGuess, setIncorrectGuess] = useState(false);
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

	// Function to generate colors and select an answer
	const generateColorsAndAnswer = () => {
		const newColors = [getRandomHexColor(), getRandomHexColor(), getRandomHexColor()];
		setColors(newColors);
		const newAnswer = newColors[Math.floor(Math.random() * newColors.length)]; // Select a random color from the new colors
		setAnswer(newAnswer); // Set the "correct" color as the answer
		setFeedback(''); // Reset feedback message when new colors are generated
		setIncorrectGuess(false); // Reset incorrectGuess state when new colors are generated
	};

	// This function is called when the component is first rendered
	// and when the component is updated (i.e., when the state changes)
	useEffect(() => {
		generateColorsAndAnswer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // The empty array ensures this effect runs only once when the component is first rendered

	// This function is called when the user clicks the reset button and also generates three new colors
	const resetColors = () => {
		generateColorsAndAnswer(); // Reuse the function to reset colors and answer
	}

	// Define the click event handler for each square
	// This function logs the hex color of the square that was clicked
	const handleSwatchClick = (color) => {
		if (color === answer) {
			setFeedback('Correct!'); // Set the feedback message to "Correct!" if the user selects the correct color
			setIncorrectGuess(false); // Set the incorrectGuess state to false
		} else {
			setFeedback('Incorrect. Try again!'); // Set the feedback message to "Incorrect!" if the user selects the wrong color
			setIncorrectGuess(true); // Set the incorrectGuess state to true
		}
	};

	return (
		<div className='game-container'>
			<div className='square-container'>
				{colors.map((color, index) => (
					// console.log(`Style for square ${index}:`, { backgroundColor: color }); // Log the style object for each square
					<div
						key={index}
						// conditionally apply the "correct-swatch" class to the square if the user selects the correct color
						// by checking if the incorrectGuess state is true and the color is equal to the answer
						// If the condition is true, the "correct-swatch" class is applied, otherwise it is not
						className={`square ${incorrectGuess && color === answer ? 'correct-swatch' : ''}`}
						style={{ backgroundColor: color }}
						onClick={() => handleSwatchClick(color)}>
						{/* Conditionally render the hex color text */}
						{feedback && (
							<span style={{
								position: 'absolute',
								bottom: '5px',
								right: '5px',
								color: '#FFF',
								fontSize: '12px',
								fontWeight: 'bold',
								textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)' // Enhance readability over varying colors
							}}>
								{color.toUpperCase()}
							</span>
						)}
					</div>
				))}
			</div>
			<p className='hex-color'>{answer}</p>
			<p className='status-message'>{feedback}</p>
			<button className='reset-button' onClick={resetColors}>Reset/Play Again</button>
		</div>
	);
}